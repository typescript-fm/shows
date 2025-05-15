class Resource {
  [Symbol.dispose]() {
    console.log('Resource disposed');
  }
}

class AsyncResource {
  async [Symbol.asyncDispose]() {
    console.log('Async resource disposed');
  }
}

// Calls the dispose method
// synchronously
using res = new Resource();

// Calls the async dispose method
// asynchronously
await using asyncRes = new AsyncResource();