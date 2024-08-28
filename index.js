var x = 10;

function test() {
  console.log(x);
  var x = 20;
  console.log(x);
}

test();

// Output will be -> undefined and 20

// Why

/* because firstly the gobal execution context wil created and in that there will be a 
2 component memory component and code component in memory component the x will be 
initialized and the value will be undefined in phase 1 of creaion after that x will
be 10 and next there is a function called test() for this a new execution context
will be created and all variable will be assigned in memory component x will be 
undefined and in line of console.log(x) it will give undefined and the code moves 
to x =20 in execution context of this function first x will undefined and after in 
second phase the x will be 20 and lastly the console.log x and output will be 
undefined and 20*/
