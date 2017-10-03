function leastSquares(xSeries, ySeries) {
  let sumFunc = (a, b) => a + b;
  if (xSeries.length === 0) debugger;

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
