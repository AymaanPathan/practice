// 1.  asteroidCollision
var asteroidCollision = function (asteroids) {
  let stack = [];
  for (let i = 0; i < asteroids.length; i++) {
    let isIncomingDestroyed = false;
    while (
      stack.length > 0 &&
      stack[stack.length - 1] > 0 &&
      asteroids[i] < 0
    ) {
      if (Math.abs(stack[stack.length - 1]) < Math.abs(asteroids[i])) {
        stack.pop();
        continue // skip below conditions and got to next iteration
      } else if (Math.abs(stack[stack.length - 1]) == Math.abs(asteroids[i])) {
        stack.pop();
        isIncomingDestroyed = true; // incoming asteroid also gone
        break;
      } else {
        isIncomingDestroyed = true;
        break;
      }
    }
    if (!isIncomingDestroyed) {
      stack.push(asteroids[i]);
    }
  }
  return stack;
};
