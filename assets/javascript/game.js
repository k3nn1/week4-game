
$(document).ready(function() {

    // Variables I need //
    var Wins = 0;
    var Losses = 0;
    var yourTotal = 0;
    var computerRandom = Math.floor(Math.random()* 101 + 19);
    console.log("computer Random " + computerRandom);

    // Displaying Wins, Losses, and Computer Random number on screen
    $("#wins").append(Wins);
    $("#loss").append(Losses)
    $("#computerRandom").text(computerRandom);
    $("#score").text(yourTotal);

    // Each crystal will have a random number between 1 and 12
    var x = Math.floor(Math.random()*11+1); //blue
    var y = Math.floor(Math.random()*11+1); //green
    var z = Math.floor(Math.random()*11+1); //red
    var k = Math.floor(Math.random()*11+1); //yellow
    console.log("blue:"+ x + " green:"+ y + " red:"+ z + " yellow:"+ k)

    var audio = new Audio("http://www.ibiblio.org/pub/multimedia/pc-sounds/chimes.wav");

    // reset
    function reset() {
        var x = Math.floor(Math.random()*11+1); //blue
        var y = Math.floor(Math.random()*11+1); //green
        var z = Math.floor(Math.random()*11+1); //red
        var k = Math.floor(Math.random()*11+1); //yellow
        var computerRandom = Math.floor(Math.random()* 101 + 19);

    };

    // Each crystal will have a random number between 1 and 12
    $("#blue").on("click", function() {
        console.log("blue gem " + x);
        yourTotal = yourTotal + x;  // Display value of each crystal in score box area
        $("#score").text(yourTotal);    
        
        if (yourTotal === computerRandom) {
            $("#status").text("YOU WIN!!");
            audio.play();
            Wins++;
            $("#wins").append(Wins++);
            reset();
        }
    }); 

    $("#green").on("click", function() {
        console.log("green gem " + y);
        yourTotal = yourTotal + y;  // Display value of each crystal in score box area
        $("#score").text(yourTotal);

        if (yourTotal === computerRandom) {
            $("#status").text("YOU WIN!!");
            audio.play();
            Wins++;
            $("#wins").append(Wins++);
            reset();
        }
    });

    $("#red").on("click", function() {
        console.log("red gem " + z);
        yourTotal = yourTotal + z;  // Display value of each crystal in score box area
        $("#score").text(yourTotal);

        if (yourTotal === computerRandom) {
            $("#status").text("YOU WIN!!");
            audio.play();
            Wins++;
            $("#wins").append(Wins++);
            reset();
        }
    });
    
    $("#yellow").on("click", function() {
        console.log("yellow gem " + k);
        yourTotal = yourTotal + k;  // Display value of each crystal in score box area
        $("#score").text(yourTotal);

        if (yourTotal === computerRandom) {
            $("#status").text("YOU WIN!!");
            audio.play();
            Wins++;
            $("#wins").append(Wins++)
            reset();
        }
    }); 

    

    
    ////////I still have to work out some bugs which I am still trying to figure out./////////  i wish I had more time. Still working on it though...

    
})

// 

