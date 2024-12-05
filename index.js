var reverseVowels = function (s) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let start = 0;
  let arr = s.split("");
  let end = arr.length - 1;

  while (start < end) {
    if (vowels.includes(arr[start]) && vowels.includes(arr[end])) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    } else if (vowels.includes(arr[start]) && !vowels.includes(arr[end])) {
      end--;
    } else if (!vowels.includes(arr[start]) && vowels.includes(arr[end])) {
      start++;
    } else {
      start++;
      end--;
    }
  }
  return arr.join("");
};
const s = "IceCreAm";
console.log(reverseVowels(s));
