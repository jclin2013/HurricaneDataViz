//Resources used to create best fit line were:
//http://bl.ocks.org/benvandyke/8459843
//https://www.varsitytutors.com/hotmath/hotmath_help/topics/line-of-best-fit

let lineProperties = {
  'allHurricanes': [allHurricanes, "allHurricanes", "darkgreen"],
  'majorHurricanes': [majorHurricanes, "majorHurricanes", "#931319"]
};

let createTrendlines = (dataset, lineType) => {
  let [sumFunc, className, color] = lineProperties[lineType];

  let xSeries = d3.range(1851, 2017), //d3.range(dataset.length);
      ySeries = dataset.map(sumFunc);

  let [slope, intercept] = leastSquares(xSeries, ySeries);

  let x1 = xSeries[0],
      y1 = slope * x1 + intercept,
      x2 = xSeries[xSeries.length - 1] + 1,
      y2 = slope * x2 + intercept;

  svg.append("line")
      .attr("class", `trendline ${className}`)
      .attr("x1", xScale(x1))
      .attr("y1", yScale(y1))
      .attr("x2", xScale(x2))
      .attr("y2", yScale(y2))
      .attr("stroke", color)
      .attr("stroke-width", 4)
      .attr("stroke-dasharray", "12, 4")
      .append("title")
      .text(`${slope}x + ${intercept}`);
};

createTrendlines(dataset, 'allHurricanes');
createTrendlines(dataset, 'majorHurricanes');

function leastSquares(xSeries, ySeries) {
  let sumFunc = (a, b) => a + b;
  let xBar = xSeries.reduce(sumFunc) / xSeries.length;
  let yBar = ySeries.reduce(sumFunc) / ySeries.length;

  let ssXX = xSeries.map(x => Math.pow(x - xBar, 2))
                    .reduce(sumFunc);

  let ssXY = xSeries.map((x, i) => (x - xBar) * (ySeries[i] - yBar))
                    .reduce(sumFunc);

  let slope = ssXY / ssXX;
  let intercept = yBar - (xBar * slope);

  return [slope, intercept];
}
