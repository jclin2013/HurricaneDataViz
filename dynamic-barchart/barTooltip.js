let barTooltip = g => {
   g.on("mouseover", function() {
       d3.select(this).attr("fill", "black")
                      // .attr("stroke-width", "0.5");
     })
    .on("mouseout", function() {
       d3.select(this).attr("fill", "")
                      // .attr("stroke-width", "");
     });
 };
