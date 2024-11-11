//track the interval id
var intervalId = 0;

//this function will move image around the page
function moveImage(){
    //makes it so we cant click start since its already started
    document.getElementById("startButton").disabled = true;
    //make stop button clickable
    document.getElementById("stopButton").disabled = false;


    //create a nickname/shortcut variable that points to our HTML image
    var image = document.getElementById("MissPRImage");

    //keeps track of where image was
    var oldX = 0;
    var oldY = 0;

    //keeping track of intervalId will allow us to stop moving the image
    intervalId = setInterval(function(){
        //set the x and y coordinates for the image
        var newX = 5;
        var newY = 5; //moves image by 5 pixels- could be whatever numeber

        // oldX += newX is the same thing as oldX = oldx + newX
        oldX += newX;
        oldY += newY;

        console.log("oldX = " + oldX);
        console.log("oldY = " + oldY);

        image.style.left = oldX + "px";
        image.style.top = oldY + "px";
    }, 1000); //1000 is 1000 miliseconds = 1 second

}

//this function will stop moving the image
function stopImage(){
    //makes it so we cant click start since its already started
    document.getElementById("startButton").disabled = false;
    //make stop button not clickable
    document.getElementById("stopButton").disabled = true;

    //call the built in java script function to clear out the interval
    clearInterval(intervalId);
}