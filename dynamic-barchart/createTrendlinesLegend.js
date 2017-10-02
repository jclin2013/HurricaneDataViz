let createTrendlinesLegend = (svg, w, h, p) => {

  let legendTextY = h/5 - 30;
  let legendLineY = legendTextY - 5;
  //  trendlines label
  svg.append("text")
     .attr("y", legendTextY)
     .attr("x", w/3 - 100)
     .text("TRENDLINES:")
     .attr("font-weight", "900");

  //all hurricanes line snippet
  svg.append("line")
    .attr("class", "trendlineAllHurricanes")
    .attr("x1", w/3 + 10)
    .attr("y1", legendLineY)
    .attr("x2", w/3 + 60)
    .attr("y2", legendLineY)
    .attr("stroke", "darkgreen")
    .attr("stroke-width", 4)
    .attr("stroke-dasharray", "12, 6");

  //  all hurricanes legend label
  svg.append("text")
     .attr("y", legendTextY)
     .attr("x", w/3 + 65)
     .text("All Hurricanes")

  //major hurricanes line snippet
  svg.append("line")
    .attr("class", "trendlineMajorHurricanes")
    .attr("x1", w/3 + 180)
    .attr("y1", legendLineY)
    .attr("x2", w/3 + 230)
    .attr("y2", legendLineY)
    .attr("stroke", "#931319")
    .attr("stroke-width", 4)
    .attr("stroke-dasharray", "12, 6");

  //major hurricanes legend label
  svg.append("text")
    .attr("y", legendTextY)
    .attr("x", w/3 + 235)
    .text("Major Hurricanes")
}
