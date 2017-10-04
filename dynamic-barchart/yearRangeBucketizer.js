//Function below bucketizes the data for a given interval.
//If the interval doesn't evenly divide the years,
//the function will adjust the size of the last bucket.
//(That is, it'll allow the last year range to be smaller.)

let yearRangeBucketizer = (data, interval) => {
  let currentObj = {year: null, cat1: 0, cat2: 0, cat3: 0, cat4: 0, cat5: 0};
  let result = [];
  let count = 0;
  let label;

  data.forEach((obj, i) => {
    count++;

    currentObj.cat1 += obj.cat1;
    currentObj.cat2 += obj.cat2;
    currentObj.cat3 += obj.cat3;
    currentObj.cat4 += obj.cat4;
    currentObj.cat5 += obj.cat5;

    if (count % interval === 0) {
      if (interval === 1) {
        label = obj.year;
      } else {
        label = (obj.year - interval + 1) + "-" + obj.year;
      }

      currentObj.year = label;
      currentObj.key = label + "-interval" + interval;
      result.push(currentObj);
      currentObj = {year: null, cat1: 0, cat2: 0, cat3: 0, cat4: 0, cat5: 0};
    }

    if (i === data.length - 1 && count % interval !== 0) {
      if (count % interval === 1) {
        label = String(obj.year);
      } else {
        label = (obj.year - (count % interval) + 1) + "-" + obj.year;
      }

      currentObj.year = label;
      currentObj.key = label + "-interval" + interval;

      result.lastBucketIsUneven = true;

      result.push(currentObj);
    }
  })

  return result;
}
