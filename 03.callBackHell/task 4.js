console.log("first call");
setTimeout(() => {
  console.log("second call");
}, 2000);
console.log("third call");

//output:
// first call
// third call
// second call
