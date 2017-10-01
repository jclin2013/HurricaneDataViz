//Resources used to create best fit line were:
//http://bl.ocks.org/benvandyke/8459843
//https://www.varsitytutors.com/hotmath/hotmath_help/topics/line-of-best-fit

let xSeries = d3.range(1851, 2017);
let ySeriesAllHurricanes = dataset.map(d => allHurricanes(d));

let LSAllHurricanes = leastSquares(xSeries, ySeriesAllHurricanes);

//AH abbrev for All Hurricanes
let x1 = xSeries[0];
let y1AH = LSAllHurricanes[0] * x1 + LSAllHurricanes[1];
let x2 = xSeries[xSeries.length - 1] + 1;
let y2AH = LSAllHurricanes[0] * x2 + LSAllHurricanes[1];
// console.log(`LSAllHurricanes`, LSAllHurricanes);
// console.log(y2AH > y1AH);
// console.log(y2AH, y1AH, x2, x1);
svg.append("line")
    .attr("class", "trendlineAllHurricanes")
    .attr("x1", xScale(x1))
    .attr("y1", yScale(y1AH))
    .attr("x2", xScale(x2))
    .attr("y2", yScale(y2AH))
    .attr("stroke", "darkgreen")
    .attr("stroke-width", 4)
    .attr("stroke-dasharray", "12, 4")
    .append("title")
    .text(`${LSAllHurricanes[0]}x + ${LSAllHurricanes[1]}`);

let ySeriesMajorHurricanes = dataset.map(d => d.cat3 + d.cat4 + d.cat5);
let LSMajorHurricanes = leastSquares(xSeries, ySeriesMajorHurricanes);

// MH abbrev for Major Hurricanes
let y1MH = LSMajorHurricanes[0] * x1 + LSMajorHurricanes[1];
let y2MH = LSMajorHurricanes[0] * x2 + LSMajorHurricanes[1];
// console.log(`LSMajorHurricanes`, LSMajorHurricanes);
// console.log(y2MH > y1MH);
//
svg.append("line")
    .attr("class", "trendlineMajorHurricanes")
    .attr("x1", xScale(x1))
    .attr("y1", yScale(y1MH))
    .attr("x2", xScale(x2))
    .attr("y2", yScale(y2MH))
    .attr("stroke", "#931319")
    .attr("stroke-width", 4)
    .attr("stroke-dasharray", "12, 6")
    .append("title")
    .text(`${LSMajorHurricanes[0]}x + ${LSMajorHurricanes[1]}`);

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
