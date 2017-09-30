let rowConverter = d => {
  return {
    year: Number(d.Year),
    category: Number(d["Highest Saffir-Simpson Category (U.S.)"])
  };
};

let getYearsWithoutHurricanes = d => {
  yearsWithoutHurricanes = [];
  for(let i = 0; i < d.length - 1; i++) {
    let currentYear = d[i].year;
    let nextYear = d[i + 1].year;
    if (nextYear - currentYear > 1) {
      currentYear++;
      while (currentYear < nextYear) {
        yearsWithoutHurricanes.push({ year: currentYear });
        currentYear++;
      }
    }
  }
  return yearsWithoutHurricanes;
}

let dataset;

d3.csv("data.csv", rowConverter, d => {
  let yearsWithoutHurricanes = getYearsWithoutHurricanes(d);

  d = d.concat(yearsWithoutHurricanes).sort((a, b) => a.year - b.year);

  dataset = d3.nest()
              .key(d => d.year)
              .rollup(v => v.filter(obj => obj.category)
                            .map(obj => obj.category))
              .entries(d)
              .map(obj => {
                let result = {
                  year: Number(obj.key),
                  cat1: 0, cat2: 0, cat3: 0, cat4: 0, cat5: 0
                }

                obj.value.forEach(category => {
                  result["cat" + category] += 1;
                });

                return result;
              });

  loadDataVis();
});
