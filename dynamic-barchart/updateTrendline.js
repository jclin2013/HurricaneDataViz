updateTrendline = (dataset, sumFunc, line) => {
  // let [sumFunc, className, color] = lineProperties[lineType];

  let xSeries = dataset.map(obj => xScale(obj.year)),
      ySeries = dataset.map(obj => yScale(sumFunc(obj)));

  let [slope, intercept] = leastSquares(xSeries, ySeries);

  let x1 = xSeries[0],
      y1 = slope * x1 + intercept,
      x2 = xSeries[xSeries.length - 1],
      y2 = slope * x2 + intercept;

  [slope, intercept] = slopeFormat(slope, intercept);

  let slopeTextTransition = slopeText => {
    slopeText.attr("opacity", "1")
             .transition()
             .duration(250)
             .attr("opacity", "0")
             .transition()
             .duration(250)
             .attr("opacity", "1")
             .text(`slope: ${slope}x + ${intercept}`);
  };

  if (line.attr("class").includes("allHurricanes")) {
    d3.select(".allHurricanesLineSlope")
      .call(slopeTextTransition);
  } else {
    d3.select(".majorHurricanesLineSlope")
      .call(slopeTextTransition);
  }

  line.transition()
      .duration(500)
      .attr("x1", x1)
      .attr("y1", y1)
      .attr("x2", x2)
      .attr("y2", y2)

  line.select("title")
      .text(`${slope}x + ${intercept}`);

  return line;
};
