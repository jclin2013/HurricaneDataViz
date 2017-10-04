let createInputs = (svg, h, p) => {
  let xOffset = p.left;
  let yOffset = h - 70;

   svg.append("foreignObject")
     .attr('x', xOffset - 10)
     .attr('y',  yOffset)
     .attr('width', "240px" )
     .attr('height', "20px")
     .append("xhtml:body")
     .html(`
       <div id="yearRangeInputContainer">
         <div>Year Range Interval:</div>
         <input value=1 type=number min=1 max=83 id=intervalInput></input>
         <button id="submitIntervalButton">Submit</button>
         <i class="fa fa-info-circle" aria-hidden="true"></i>
       </div>
      `);

  svg.append("foreignObject")
    .attr('x', xOffset + 280)
    .attr('y',  yOffset)
    .attr('width', "50px")
    .attr('height', "20px")
    .append("xhtml:body")
    .html(`
      <div id="include2017CheckboxContainer">
        <div>Include Available Data from 2017?</div>
        <div id="check"></div>
        <i class="fa fa-info-circle" aria-hidden="true"></i>
      </div>
     `);
}
