let createInputs = (svg, h, p) => {
  let xOffset = p.left;

   svg.append("foreignObject")
     .attr('x', xOffset - 10)
     .attr('y',  h - 50)
     .attr('width', "240px")
     .attr('height', "20px")
     .append("xhtml:body")
     .html(`
       <div id="yearRangeInputContainer">
         <div>Year Range Interval:</div>
         <input value=1 type=number min=1 id=intervalInput></input>
         <button id="submitIntervalButton">Submit</button>
         <i class="fa fa-info-circle" aria-hidden="true"></i>
       </div>
      `);

  svg.append("foreignObject")
    .attr('x', xOffset + 280)
    .attr('y',  h - 50)
    .attr('width', "50px")
    .attr('height', "20px")
    .append("xhtml:body")
    .html(`
      <div id="include2017CheckboxContainer">
        <div>Include Available Data from 2017?</div>
        <input type=checkbox id=check></input>
        <i class="fa fa-info-circle" aria-hidden="true"></i>
      </div>
     `);
}
