
$(document).ready(function() {

    // Variables I need //
    var wins = 0;
    var losses = 0;
    var yourTotal = 0;
    var computerRandom = Math.floor(Math.random()* 101 + 19);
    console.log("computer Random " + computerRandom);

    // Displaying Wins, Losses, and Computer Random number on screen
    $("#scoreW").append(wins);
    $("#scoreL").append(losses)
    $("#computerRandom").text(computerRandom);
    $("#score").text(yourTotal);

    // Each crystal will have a random number between 1 and 12
    var x = Math.floor(Math.random()*11+1); //blue
    var y = Math.floor(Math.random()*11+1); //green
    var z = Math.floor(Math.random()*11+1); //red
    var k = Math.floor(Math.random()*11+1); //yellow
    console.log("blue:"+ x + " green:"+ y + " red:"+ z + " yellow:"+ k)

    var audio = new Audio("http://www.ibiblio.org/pub/multimedia/pc-sounds/chimes.wav");
    var audioL = new Audio("https://www.freespecialeffects.co.uk/soundfx/computers/bleep_04.wav");

    // reset
    function reset() {
        x = Math.floor(Math.random()*11+1); //blue
        y = Math.floor(Math.random()*11+1); //green
        z = Math.floor(Math.random()*11+1); //red
        k = Math.floor(Math.random()*11+1); //yellow
        computerRandom = Math.floor(Math.random()* 101 + 19);
        $("#computerRandom").text(computerRandom);
        yourTotal = 0;
        console.log("======= New Game ==========");
        console.log(x,y,z,k,computerRandom);
    }
    // console.log("testing reset: " + x,y,z,k,computerRandom, yourTotal); // checking if my reset works

    // !! WIN  !!
    function win() {
        wins++;
        audio.play();
        $("#scoreW").text(wins);
        reset();
    }
    console.log("testing win: " + wins);

    // !! Loser !!
    function lose() {
        losses++;
        audioL.play();
        $("#scoreL").text(losses);
        reset();
    }
    console.log("testing lose: " + losses);


    // // // 
    $("#blue").on("click", function() {
        console.log("blue gem " + x);
        yourTotal = yourTotal + x;  // Display value of each crystal in score box area
        $("#score").text(yourTotal);    
        
        if (yourTotal == computerRandom) {
            $("#status").text("YOU WIN!!");
            win();
            reset();
        }

        else if (yourTotal > computerRandom) {
            $("#status").text("!!YOU LOSE!!");
            lose();
            reset();
        }
    }); 

    $("#green").on("click", function() {
        console.log("green gem " + y);
        yourTotal = yourTotal + y;  // Display value of each crystal in score box area
        $("#score").text(yourTotal);

        if (yourTotal == computerRandom) {
            $("#status").text("YOU WIN!!");
            win();
            reset();
        }
        else if (yourTotal > computerRandom) {
            $("#status").text("!!YOU LOSE!!");
            lose();
            reset();
        }
    });

    $("#red").on("click", function() {
        console.log("red gem " + z);
        yourTotal = yourTotal + z;  // Display value of each crystal in score box area
        $("#score").text(yourTotal);

        if (yourTotal == computerRandom) {
            $("#status").text("YOU WIN!!");
            win();
            reset();
        }
        else if (yourTotal > computerRandom) {
            $("#status").text("!!YOU LOSE!!");
            lose();
            reset();
        }
    });
    
    $("#yellow").on("click", function() {
        console.log("yellow gem " + k);
        yourTotal = yourTotal + k;  // Display value of each crystal in score box area
        $("#score").text(yourTotal);

        if (yourTotal == computerRandom) {
            $("#status").text("!!YOU WIN!!");
            win();
            reset();
        } 
        
        else if (yourTotal > computerRandom) {
            $("#status").text("!!YOU LOSE!!");
            lose();
            reset();           
        }
        
    }); 
    
})

// 

