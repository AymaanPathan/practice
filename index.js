var uniqueOccurrences = function (arr) {
  let freq = {};
  let counrFreq = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (!freq[num]) {
      freq[num] = 1;
    } else {
      freq[num]++;
    }
  }
  let freqArr = Object.values(freq);
  for (let i = 0; i < freqArr.length; i++) {
    let num = freqArr[i];
    if (!counrFreq[num]) {
      counrFreq[num] = 1;
    } else {
      counrFreq[num]++;
    }
    if (counrFreq[num] >= 2) return false;
  }
  return true;
};
const arr = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0];
console.log(uniqueOccurrences(arr));
