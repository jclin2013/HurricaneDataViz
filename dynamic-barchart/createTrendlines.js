//Resources used to create best fit line were:
//http://bl.ocks.org/benvandyke/8459843
//https://www.varsitytutors.com/hotmath/hotmath_help/topics/line-of-best-fit

let lineProperties = {
  'allHurricanes': [
    allHurricanes, "allHurricanes", "darkgreen"
  ],
  'majorHurricanes': [
    majorHurricanes, "majorHurricanes", "#931319"
  ]
};

let slopeFormat = (m, b) => {
  m = parseFloat(m.toPrecision(3)).toExponential();
  b = b.toPrecision(3);
  return [m, b];
};

let createTrendline = (dataset, lineType) => {
  let [sumFunc, className, color] = lineProperties[lineType];

  let xSeries = d3.range(1851, 2017),
      ySeries = dataset.map(sumFunc);

  let [slope, intercept] = leastSquares(xSeries, ySeries);

  let x1 = xSeries[0],
      y1 = slope * x1 + intercept,
      x2 = xSeries[xSeries.length - 1] + 1,
      y2 = slope * x2 + intercept;

  [slope, intercept] = slopeFormat(slope, intercept);

  if (lineType === "allHurricanes") {
    allHurricanesLineSlope = `${slope}x + ${intercept}`;
  } else {
    majorHurricanesLineSlope = `${slope}x + ${intercept}`;
  }

  let line = d3.select("#trendlineContainer")
                .append("line")
                .attr("class", `trendline ${className}`)
                .attr("x1", xScale(x1))
                .attr("y1", yScale(y1))
                .attr("x2", xScale(x2))
                .attr("y2", yScale(y2))
                .attr("stroke", color)
                .attr("stroke-width", 4)
                .attr("stroke-dasharray", "12, 3");

  line.append("title")
      .text(`${slope}x + ${intercept}`);

  return line;
};

lineAllHurricanes = createTrendline(dataset, 'allHurricanes');
lineMajorHurricanes = createTrendline(dataset, 'majorHurricanes');
