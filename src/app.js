// class Simon {

// }
console.log('JS is working!')

//click function is to change Id of the button
  function redClick(){
    $('#b0').attr('id', 'b0-red');
  }

  function yellowClick() {
    $('#b1').attr('id', 'b1-yellow');
  }

  function greenClick() {
    $('#b2').attr('id', 'b2-green');
  }

  function blueClick() {
    $('#b3').attr('id', 'b3-blue');
  }

  function mouseUp() {
    $('#b0-red').attr('id', 'b0');
    $('#b1-yellow').attr('id', 'b1');
    $('#b2-green').attr('id', 'b2');
    $('#b3-blue').attr('id', 'b3');
  }










$('#b0').on('mousedown', redClick).on('mouseup', mouseUp);
$('#b1').on('mousedown', yellowClick).on('mouseup', mouseUp);
$('#b2').on('mousedown', greenClick).on('mouseup', mouseUp);
$('#b3').on('mousedown', blueClick).on('mouseup', mouseUp);

// $('#b1').on('click', carryOutFunction);
// $('#b2').on('click', carryOutFunction);
// $('#b3').on('click', carryOutFunction);
