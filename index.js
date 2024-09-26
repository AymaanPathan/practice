function phoneNumberDirectory(phone) {
  const phoneMap = new Map();
  for (let num of phone) {
    const [name, phone] = num.split(":");
    phoneMap.set(name, phone);
  }
  return phoneMap;
}

console.log(
  phoneNumberDirectory([
    "ashish:9988778877",
    "rash:7768833445",
    "abc:234343454545",
  ])
);
