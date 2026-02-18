// closure:------>

// console.log("first");

let b = 10;
function greet() {
  let a = 20;

  function meet() {
    console.log(a);
  }
  //   meet();

  return meet;
}

// greet();

const num = greet();
num(); // 20
