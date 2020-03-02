let helloPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello!"), 1000);
  });
  
  helloPromise.then(message => {
      // First promise
    console.log("Promise is done! " + message);
    return new Promise((resolve) => {
        // Second promise
      setTimeout(() => resolve("Hello 2!"), 1000);
    });
  }).then(message => {
      // Second promise
    console.log("Second promise is done! " + message);
  })
