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

function displaySlopeInfo(text, heightOfText) {
  let tooltip = d3.select("#infoTooltip");
  tooltip.classed("hidden", false);
  tooltip.text(text);

  let { left, top } = this.getBoundingClientRect();
  tooltip.style("left", left - 190 + "px");
  tooltip.style("top", top + 40 + "px");
}

let yearRangeText =
  `Bucketize the data by different time intervals here.
  When the time series data can't be divided into equal
  durations, a 'remainder' year range will be produced,
  but it will be excluded from trendline calculations.`;

let slopeInfoText =
  `If you divide the time series by decades, leaving out 2011-2016,
  the trendline for major hurricanes shows a slightly positive slope,
  in line with The Economist's data viz at the source link (bottom).
  But when looking at the data at the level of individual years
  spanning 1851 to 2016, the trendline has a slightly negative slope.
  However, when 2017 is included (which isn't in the default
  dataset), the trendline returns to being slightly positive.`

let include2017Text =
  `Check the box to add the hurricanes that
  have made landfall in the U.S. so far in 2017.`;

d3.select("#yearRangeInputContainer .fa-info-circle")
  .on("mouseover", function() {
    displayTooltip.bind(this)(yearRangeText, 170);
  })
  .on("mouseout", hideTooltip);

d3.select("#include2017CheckboxContainer .fa-info-circle")
  .on("mouseover", function() {
    displayTooltip.bind(this)(include2017Text, 95);
  })
  .on("mouseout", hideTooltip);

d3.select("#slopeInfoIcon")
  .on("mouseover", function() {
    displaySlopeInfo.bind(this)(slopeInfoText, 95);
  })
  .on("mouseout", hideTooltip);
