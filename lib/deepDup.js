function deepDup(arr) {
  let result = [];
  arr.forEach(obj => {
    let copyObj = {};
    for (let key in obj) {
      copyObj[key] = obj[key];
    }
    result.push(copyObj);
  })
  return result;
}
