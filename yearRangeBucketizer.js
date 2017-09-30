// 1851-1862
// 1863-1874
// 1875-1887
// 1, 6

let yearRangeBucketizer = (data, interval) => {
  let subArr = {cat1: 0, cat2: 0, cat3: 0, cat4: 0, cat5: 0};
  let result = [];
  let count = 0;
  let label;

  data.forEach((obj, i) => {
    count++;

    subArr.cat1 += obj.cat1;
    subArr.cat2 += obj.cat2;
    subArr.cat3 += obj.cat3;
    subArr.cat4 += obj.cat4;
    subArr.cat5 += obj.cat5;

    if (count % interval === 0) {
      if (interval === 1) {
        label = obj.year;
      } else {
        label = (obj.year - interval + 1) + "-" + obj.year;
      }

      subArr.year = label;
      result.push(subArr);
      subArr = {cat1: 0, cat2: 0, cat3: 0, cat4: 0, cat5: 0};
    }

    if (i === data.length - 1 && count % interval !== 0) {
      if (count % interval === 1) {
        label = String(obj.year);
      } else {
        label = (obj.year - (count % interval) + 1) + "-" + obj.year;
      }

      console.log();
      subArr.year = label;
      result.push(subArr);
    }
  })

  return result;
}
