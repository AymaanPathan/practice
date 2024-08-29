if (true) {
  var a = 10;
}
console.log(a);

// Output =10

/*bcoz in var variable hoisting.when js runs this code it first declare the value
of a but not give any value a; and when js reaches to if condition if true than the
a became 10 and after that it will log 10 bcoz the condition is true   */

/* 
var a; // Declaration is hoisted to the top of the global scope

if (true) {
  a = 10; // Assignment remains in its place
}
console.log(a); // Prints 10
*/

//above code representing how it will run behind the scene
