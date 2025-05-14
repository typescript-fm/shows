class Resource {
  [Symbol.dispose]() {
    console.log('Resource disposed');
  }
}

using res = new Resource();
// Use the resource
