let createTrendlinesLegend = (svg, w, h, p) => {
  let legendTextY = h/5 - 25;
  let legendLineY = legendTextY - 5;
  let legendX = w/9;

  //  trendlines label
  svg.append("text")
     .attr("y", legendTextY)
     .attr("x", legendX + 10)
     .text("TRENDLINES:")
     .attr("font-weight", "900");

  //all hurricanes line snippet
  svg.append("line")
      .attr("class", "trendlineAllHurricanes")
      .attr("x1", legendX + 120)
      .attr("y1", legendLineY - 7)
      .attr("x2", legendX + 160)
      .attr("y2", legendLineY - 7)
      .attr("stroke", "darkgreen")
      .attr("stroke-width", 4)
      .attr("stroke-dasharray", "12, 1.5");

  //  all hurricanes legend label
  svg.append("text")
     .attr("y", legendTextY - 7)
     .attr("x", legendX + 165)
     .attr("font-size", 12)
     .text("All Hurricanes (Categories 1-5)")

  //major hurricanes line snippet
  svg.append("line")
      .attr("class", "trendlineMajorHurricanes")
      .attr("x1", legendX + 120)
      .attr("y1", legendLineY + 7)
      .attr("x2", legendX + 160)
      .attr("y2", legendLineY + 7)
      .attr("stroke", "#931319")
      .attr("stroke-width", 4)
      .attr("stroke-dasharray", "12, 1.5");

  //major hurricanes legend label
  svg.append("text")
    .attr("y", legendTextY + 7)
    .attr("x", legendX + 165)
    .attr("font-size", 12)
    .text("Major Hurricanes (Categories 3+)")

  //all hurricanes line slope
  svg.append("text")
     .attr("class", "allHurricanesLineSlope")
     .attr("y", legendTextY - 7)
     .attr("x", legendX + 360)
     .attr("font-size", 12)
     .text(allHurricanesLineSlope);

  //major hurricanes line slope
  svg.append("text")
     .attr("class", "majorHurricanesLineSlope")
     .attr("y", legendTextY + 7)
     .attr("x", legendX + 360)
     .attr("font-size", 12)
     .text(majorHurricanesLineSlope);
}

createTrendlinesLegend(svg, w, h, p);
