var b = 10;
function a() {
  c();
  function c() {
    console.log(b);
  }
}
a();

// Output is 10

// Why

/*bcoz there is a concept called lexical means in above code there is a 2 function a 
and c for a it will create a new execution context and for b also new execution 
context will be created in c function we a console a so what will this do is first
the c function will try to find c in c function if it will not found in this scope
it will go to its parent which is a a function and try to find it there and again 
there is no b variable will found and again it will go to parent of a which is 
global scope and yes there is a b variable in global space so the output will
be 10 */

// What is lexical
/* . Whenever an execution context is created, a lexical environment is created.
 Lexical environment is the local memory along with the lexical environment of its parent.
Lexical as a term means in hierarchy or in sequence. */
/* 
The c function lexically inside an a function and a function lexically inside a
 global space 
*/
