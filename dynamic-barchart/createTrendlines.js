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

let createSlopeTexts = (dataset, lineType) => {
  let [sumFunc] = lineProperties[lineType];

  let xSeries = d3.range(dataset.length),
      ySeries = dataset.map(sumFunc);

  let [m, b] = leastSquares(xSeries, ySeries);

  m = parseFloat(m.toPrecision(3)).toExponential();
  b = b.toPrecision(3);

  if (lineType === "allHurricanes") {
    allHurricanesLineSlope = `${m}x + ${b}`;
  } else {
    majorHurricanesLineSlope = `${m}x + ${b}`;
  }
};

let createTrendline = (dataset, lineType) => {
  let [sumFunc, className, color] = lineProperties[lineType];
  createSlopeTexts(dataset, lineType);

  let xSeries = dataset.map((obj, i) => xScale(i)),
      ySeries = dataset.map(obj => yScale(sumFunc(obj)));

  let [slope, intercept] = leastSquares(xSeries, ySeries);

  let x1 = xSeries[0],
      y1 = slope * x1 + intercept,
      x2 = xSeries[xSeries.length - 1] + 4.5,
      y2 = slope * x2 + intercept;

  let line = d3.select("#trendlineContainer")
                .append("line")
                .attr("class", `trendline ${className}`)
                .attr("x1", x1)
                .attr("y1", y1)
                .attr("x2", x2)
                .attr("y2", y2)
                .attr("stroke", color)
                .attr("stroke-width", 4)
                .attr("stroke-dasharray", "12, 1.5");

  line.append("title")
      .text(`${slope}x + ${intercept}`);

  return line;
};

lineAllHurricanes = createTrendline(dataset, 'allHurricanes');
lineMajorHurricanes = createTrendline(dataset, 'majorHurricanes');