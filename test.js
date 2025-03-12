var reverseOnlyLetters = function (s) {
  let answer = "";
  let checkCount = 0;
  let onlyLetters = s
    .split(/[^A-Za-z]+/)
    .join("")
    .split("")
    .reverse();
  for (let i = 0; i < s.length; i++) {
    if ((s[i] >= "A" && s[i] <= "Z") || (s[i] >= "a" && s[i] <= "z")) {
      answer += onlyLetters[checkCount];
      checkCount++;
    } else {
      answer += s[i];
    }
  }
  return answer;
};
console.log(reverseOnlyLetters("ab-cd"));
