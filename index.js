var asteroidCollision = function (asteroids) {
  let stack = [];
  for (let i = 0; i < asteroids.length; i++) {
    let isCurrentDestroyed = false;
    while (
      stack.length > 0 &&
      stack[stack.length - 1] > 0 &&
      asteroids[i] < 0
    ) {
      if (stack[stack.length - 1] < Math.abs(asteroids[i])) {
        stack.pop();
      } else if (stack[stack.length - 1] === Math.abs(asteroids[i])) {
        stack.pop();
        isCurrentDestroyed = true;
        break;
      } else {
        isCurrentDestroyed = true;
        break;
      }
    }
    if (!isCurrentDestroyed) {
      stack.push(asteroids[i]);
    }
  }
  return stack;
};

console.log(asteroidCollision([-5, 10, -15])); // Output: [-5, -15]
console.log(asteroidCollision([5, 10, -5])); // Output: [5, 10]
console.log(asteroidCollision([8, -8])); // Output: []
console.log(asteroidCollision([10, 2, -5])); // Output: [10]
console.log(asteroidCollision([-2, -1, 1, 2])); // Output: [-2, -1, 1, 2]
