var asteroidCollision = function (asteroids) {
  const stack = [];
  for (let i = 0; i < asteroids.length; i++) {
    let isIncomingDestroyed = false;
    while (
      stack.length > 0 &&
      stack[stack.length - 1] > 0 &&
      asteroids[i] < 0
    ) {
      if (Math.abs(stack[stack.length - 1]) < Math.abs(asteroids[i])) {
        stack.pop();
        continue; //keep checking with new incoming
      } else if (Math.abs(stack[stack.length - 1]) === Math.abs(asteroids[i])) {
        stack.pop();
        isIncomingDestroyed = true;
        break;
      } else {
        // stack.top is greater
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

const asteroids = [5, 10, -5];
console.log(asteroidCollision(asteroids));
