//
// TC39: Micro waits in JS
// https://github.com/tc39/proposal-atomics-microwait/blob/main/README.md
//
// Pavel Romanov
// https://pavel-romanov.com/multithreading-in-nodejs-using-atomics-for-safe-shared-memory-operations
//
// ChatGPT o4-mini-high: create a simple example of using Atomics.pause
// https://chatgpt.com/share/6824edf1-0e2c-800a-8290-cc24d36eebc9
// 
import { Worker, isMainThread, workerData, threadId } from 'node:worker_threads';

const buffer = new SharedArrayBuffer(4);
const flag = new Int32Array(buffer);

if (isMainThread) {
  // Main thread: create a worker thread for the same file and pass the buffer
  new Worker(import.meta.filename, { workerData: buffer });
  new Worker(import.meta.filename, { workerData: buffer });

  // Main thread: spin‑wait with backoff
  function spinWait() {
    let backoffTime = 0;
    let spins = 0;
    while (Atomics.load(flag, 0) === 0) {
      // Hint to CPU we're spinning; backoff doubles each loop
      Atomics.pause(backoffTime);
      backoffTime = Math.min(backoffTime * 2 + 1, 1024);
      spins++;
    }
    console.log('Flag set! Spun ', spins, 'times.');            // runs after worker stores 1
  }

  spinWait();
} else {
  // Worker thread: workerData holds the shared buffer
  const flag = new Int32Array(workerData);

  setTimeout(() => {
    Atomics.store(flag, 0, 1);
  }, 1000);
}

