function capLength() {
    let intervalInput = document.getElementById('intervalInput');
    let intervalInputVal = intervalInput.value;
    let fieldLength = intervalInputVal.length;

    if (fieldLength > 2) {
        document.getElementById('intervalInput').value =
          intervalInputVal.slice(0, 2);
    }
}

let createInputs = (svg, h, p) => {
  let xOffset = p.left;
  let yOffset = h - 70;

   svg.append("foreignObject")
     .attr('x', xOffset - 10)
     .attr('y',  yOffset)
     .attr('width', "300px" )
     .attr('height', "40px")
     .append("xhtml:body")
     .html(`
       <div id="yearRangeInputContainer">
         <div>Year Range Interval:</div>
         <input
            onInput=capLength()
            value=1
            type=number
            min=1
            max=83
            id=intervalInput
          </input>
         <button id="submitIntervalButton">Submit</button>
         <i class="fa fa-info-circle" aria-hidden="true"></i>
       </div>
      `);

  svg.append("foreignObject")
    .attr('x', xOffset + 280)
    .attr('y',  yOffset)
    .attr('width', "320px")
    .attr('height', "40px")
    .append("xhtml:body")
    .html(`
      <div id="include2017CheckboxContainer">
        <div>Include Available Data from 2017?</div>
        <div id="check"></div>
        <i class="fa fa-info-circle" aria-hidden="true"></i>
      </div>
     `);
}
