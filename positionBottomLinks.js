let yOffset = h - 5;

d3.select("#dataLinksContainer")
  .attr("x", 5)
  .attr("y", yOffset)
  .attr("font-size", 10)

d3.select("#bylineContainer")
  .attr("x", w - 5)
  .attr("y", yOffset)
  .attr("font-size", 10)
  .attr("text-anchor", "end")
