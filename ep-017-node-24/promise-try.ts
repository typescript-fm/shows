Promise.try(() => {
  // Synchronous code that might throw
  return 'Success';
}).then(console.log).catch(console.error);
