import { Worker, isMainThread, workerData, threadId } from 'node:worker_threads';

if (isMainThread) {
  const buffer = new SharedArrayBuffer(1);
  new Worker(import.meta.filename, { workerData: buffer });
  new Worker(import.meta.filename, { workerData: buffer });
} else {
  const typedArray = new Int8Array(workerData);
  const value = Atomics.store(typedArray, 0, threadId);
  console.dir({ threadId, value });
}
