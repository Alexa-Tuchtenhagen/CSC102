    // this function will add soud to our page
    function addSound(){
        var soundElem = document.createElement("audio");
        // nickname/shortcut to the play button
        var btnPlay = document.getElementById("btnPlay");
         // nickname/shortcut to the pause button
        var btnPause =  document.getElementById("btnPause");

        //set up the id="audioSound" attribute on our audio element
        soundElem.setAttribute("id", "audioSound");

        //set up the src="us-lab-background.mp3"
        //src = source = the file name
        soundElem.setAttribute("src", "us-lab-background.mp3");

        //add the audio element that we just created to the HTML page
        document.body.appendChild(soundElem);

        //un-hide the pause and pause buttons
        btnPlay.hidden = false;
        btnPause.hidden = false;
    }

    //set up the function to play the sound
    function playSound(){
        //set up a nickname/shortcut to the audio element that we created in the addSound() function
        var audio = document.getElementById("audioSound");
        //start playing the audio
        audio.play();
        //log the playing started to the console because of sound issues on this computer. sadly this is kinda true with mine too
        console.log("sound player");
    }

    //set up the function to pause the playing of the sound
    function pauseSound(){
         //set up a nickname/shortcut to the audio element that we created in the addSound() function
         var audio = document.getElementById("audioSound");
         //pause the playing of the sound
         audio.pause();
        //log the playing pause to the console because of the sound issue on this computer
        console.log("sound pause");
    }