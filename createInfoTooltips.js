function displayTooltip(text, heightOfText) {
  let tooltip = d3.select("#infoTooltip");
  tooltip.classed("hidden", false);
  tooltip.text(text);
  let { left, top } = this.getBoundingClientRect();

  let adjustLeft = 7;
  if (heightOfText === 95) adjustLeft = 225;

  tooltip.style("left", left + 15 - adjustLeft + "px");
  tooltip.style("top", top - heightOfText + "px");
};

let yearRangeText =
  `Bucketize the data by different time intervals here.
  When the time series data can't be divided into equal
  durations, a 'remainder' year range will be produced,
  but it will be excluded from trendline calculations.`;

let include2017Text =
  `Check the box to add the three category 4 hurricanes that
  have made landfall in the U.S. so far in 2017.`;

d3.select("#yearRangeInputContainer .fa-info-circle")
  .on("mouseover", function() {
    displayTooltip.bind(this)(yearRangeText, 170);
  })
  .on("mouseout", () => d3.select("#infoTooltip").classed("hidden", true));

d3.select("#include2017CheckboxContainer .fa-info-circle")
  .on("mouseover", function() {
    displayTooltip.bind(this)(include2017Text, 95);
  })
  .on("mouseout", () => d3.select("#infoTooltip").classed("hidden", true));
