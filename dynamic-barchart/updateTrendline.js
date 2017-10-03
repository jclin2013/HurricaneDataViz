let updateSlopeText = (dataset, lineType, line) => {
  let [sumFunc] = lineProperties[lineType];

  let xSeries = d3.range(dataset.length),
      ySeries = dataset.map(sumFunc);

  let [m, b] = leastSquares(xSeries, ySeries);

  m = parseFloat(m.toPrecision(3)).toExponential();
  b = b.toPrecision(3);

  d3.select(`.${lineType}LineSlope`)
    .attr("opacity", "1")
    .transition()
    .duration(250)
    .attr("opacity", "0")
    .transition()
    .duration(250)
    .attr("opacity", "1")
    .text(`equation: ${m}x + ${b}`);

  line.select("title")
      .text(`${m}x + ${b}`);
};

updateTrendline = (dataset, sumFunc, line) => {
  let xSeries = dataset.map((obj, i) => xScale(i)),
      ySeries = dataset.map(obj => yScale(sumFunc(obj)));

  let [slope, intercept] = leastSquares(xSeries, ySeries);

  let x1 = xSeries[0],
      y1 = slope * x1 + intercept,
      x2 = xSeries[xSeries.length - 1] + xScale.bandwidth(),
      y2 = slope * x2 + intercept;

  line.transition()
      .duration(500)
      .attr("x1", x1)
      .attr("y1", y1)
      .attr("x2", x2)
      .attr("y2", y2)

  updateSlopeText(dataset, line.attr("class"), line);

  return line;
};
