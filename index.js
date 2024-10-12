var canConstruct = function (ransomNote, magazine) {
  let mapMagazine = {};
  for (let i = 0; i < magazine.length; i++) {
    let letter = magazine[i];
    if (!mapMagazine[letter]) {
      mapMagazine[letter] = 1;
    } else {
      mapMagazine[letter]++;
    }
  }
  for (let i = 0; i < ransomNote.length; i++) {
    let ransomNoteLetter = ransomNote[i];
    if (!mapMagazine[ransomNoteLetter]) {
      return mapMagazine;
    }
    mapMagazine[ransomNoteLetter]--;
  }

  return true;
};

const ransomNote = "aa";
const magazine = "ab";
console.log(canConstruct(ransomNote, magazine));
