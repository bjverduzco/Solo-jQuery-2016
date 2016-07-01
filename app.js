$(function(){
  var redButton = 0;
  var yellowButton = 0;
  var greenButton = 0;
  var blueButton = 0;
  var totalCount = 0;

//function to see when a button is pressed
  $('.color-button').on('click', function(){
    //variable takes in the id of the button that was pressed (i.e. the color)
    var buttonPressed = $(this).attr('id');
//switch that runs through based upon the id of the button that was pressed in order to
//increment the count as well as add the div for the cube to be added
    switch(buttonPressed){
      case 'red':
        addBlock(buttonPressed);
        redButton++;
        totalCount++;
        updateCount(redButton);
        $('#redCount').empty();
        $('#redCount').append('Total red: ' + redButton);
        break;

      case 'yellow':
        addBlock(buttonPressed);
        yellowButton++;
        totalCount++;
        updateCount(yellowButton);
        $('#yellowCount').empty();
        $('#yellowCount').append('Total yellow: ' + yellowButton);
        break;

      case 'green':
        addBlock(buttonPressed);
        greenButton++;
        totalCount++;
        updateCount(greenButton);
        $('#greenCount').empty();
        $('#greenCount').append('Total green: ' + greenButton);
        break;

      case 'blue':
        addBlock(buttonPressed);
        blueButton++;
        totalCount++;
        updateCount(blueButton);
        $('#blueCount').empty();
        $('#blueCount').append('Total blue: ' + blueButton);
        break;
    }
  });

//adds the specific block after the button is pressed
  function addBlock(buttonPressed){
    $('.container').append('<div class="color-cube" id ="' + buttonPressed + 'Cube">blah</div>');
    console.log(buttonPressed);
  };

//just to make sure that its counting properly
  function updateCount(buttonCount, totalCount){
    console.log(buttonCount);
    console.log('Total count is: ' + totalCount)
    return;
  }

})

//append to     .container
//.color-cube
//  .color-cube. (specific colors)
