"use strict";

const obj = {
  a: 10,
  x: function () {
    const y = () => {
      console.log(this); // this keyword will not see arrow function they just console.log(this) like they are in function x
    };
    y();
  },
};

obj.x();
