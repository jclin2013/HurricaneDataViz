let createTrendlinesLegend = (svg, w, h, p) => {
  let legendTextY = h/5 - 25;
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
      .attr("x1", w/3 + 12)
      .attr("y1", legendLineY - 7)
      .attr("x2", w/3 + 60)
      .attr("y2", legendLineY - 7)
      .attr("stroke", "darkgreen")
      .attr("stroke-width", 4)
      .attr("stroke-dasharray", "12, 6");

  //  all hurricanes legend label
  svg.append("text")
     .attr("y", legendTextY - 7)
     .attr("x", w/3 + 70)
     .attr("font-size", 12)
     .text("All Hurricanes")

  //major hurricanes line snippet
  svg.append("line")
      .attr("class", "trendlineMajorHurricanes")
      .attr("x1", w/3 + 12)
      .attr("y1", legendLineY + 7)
      .attr("x2", w/3 + 60)
      .attr("y2", legendLineY + 7)
      .attr("stroke", "#931319")
      .attr("stroke-width", 4)
      .attr("stroke-dasharray", "12, 6");

  //major hurricanes legend label
  svg.append("text")
    .attr("y", legendTextY + 7)
    .attr("x", w/3 + 70)
    .attr("font-size", 12)
    .text("Major Hurricanes")

  //all hurricanes line slope
  svg.append("text")
     .attr("class", "allHurricanesLineSlope")
     .attr("y", legendTextY - 7)
     .attr("x", w/3 + 175)
     .attr("font-size", 12)
     .text("slope: " + allHurricanesLineSlope);

  //major hurricanes line slope
  svg.append("text")
     .attr("class", "majorHurricanesLineSlope")
     .attr("y", legendTextY + 7)
     .attr("x", w/3 + 175)
     .attr("font-size", 12)
     .text("slope: " + majorHurricanesLineSlope);
}

createTrendlinesLegend(svg, w, h, p);
