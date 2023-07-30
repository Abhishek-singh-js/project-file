var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;  // we create this because when false means stopwatch stop true means start

// for start button

function start() {
    timer = true;
    stopwatch();
}

//for stop button

function stop() {
    timer = false;
}

//for reset button

function reset() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById("hr").innerHTML = hr;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("count").innerHTML = count;

}

// function that the start button will call

function stopwatch() {
    if (timer == true) {

        count = count + 1;

        //for sec
        if (count == 100) {
            sec = sec + 1;
            count = 0;
        }
        //for min
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        //for hr
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        // we create this this because whe we reset stopwatch by default showing only one zero but we need double digit zero

        var hrString = hr;
        var minString = min;
        var secString = sec;
        var countString = count;

        if (hr < 10) {
            hrString = "0" + hrString;
        }
        if (min < 10) {
            minString = "0" + minString;
        }
        if (sec < 10) {
            secString = "0" + secString;
        }
        if (count < 10) {
            countString = "0" + countString;
        }

        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("count").innerHTML = countString;

        // imp function which will call the stopwatch function after every 10 msec

        setTimeout("stopwatch()", 10);
    }
}