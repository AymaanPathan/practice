"use strict";

const obj = {
  a: 10,
  b: function () {
    console.log(this);
  },
};

obj.b();
