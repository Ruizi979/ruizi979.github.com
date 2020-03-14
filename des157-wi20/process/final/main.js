"use strict";
console.log('reading js');

//global variable
let isContinue = false;
let rightNumber = 0;
let choice1 = false;
let choice2 = false;
let choice3 = false;

//firstStep 
document.getElementById("firstStep").addEventListener('click', function () {
    document.getElementById("Home").style.display = "none";
    document.getElementById("About").style.display = "block";
});

//secondStep
document.getElementById("startBtn").addEventListener('click', function () {
    document.getElementsByClassName("q1")[0].style.display = "block";
    document.getElementById("About").style.display = "none";
});

//next btn onclick
document.getElementById("next1").addEventListener('click', function () {
    if (isContinue) {
        isContinue = false;
        document.getElementsByClassName("q1")[0].style.display = "none";
        document.getElementsByClassName("q1")[1].style.display = "block";
    } else {
        alert("Please choose the answer");
    }
});

//next btn onclick
document.getElementById("next2").addEventListener('click', function () {
    if (isContinue) {
        isContinue = false;
        document.getElementsByClassName("q1")[1].style.display = "none";
        document.getElementsByClassName("q1")[2].style.display = "block";
    } else {
        alert("Please choose the answer");
    }
});

//next btn onclick
document.getElementById("next3").addEventListener('click', function () {
    if (isContinue) {
        isContinue = false;
        document.getElementsByClassName("q1")[2].style.display = "none";
        document.getElementById("fakeNew").style.display = "block";
        if (rightNumber == 0) {
            document.getElementById("a1").innerHTML = "Sorry, you got all of them wrong!";
            document.getElementById("a2").innerHTML = "I think you must have some experience about fake news, ";
            document.getElementById("a3").innerHTML = "go share your story for our community!";
        }
        if (rightNumber == 1) {
            document.getElementById("a1").innerHTML = "Hi! You just got one right!";
            document.getElementById("a2").innerHTML = "I think you must have some experience about fake news, ";
            document.getElementById("a3").innerHTML = "go share your story for our community!";
        }
        if (rightNumber == 2) {
            document.getElementById("a1").innerHTML = "You got two of them right! Nice Job!";
            document.getElementById("a2").innerHTML = "I think you must have some experience about fake news, ";
            document.getElementById("a3").innerHTML = "go share your story for our community!";
        }
        if (rightNumber == 3) {
            document.getElementById("a1").innerHTML = "Great Job! You got all three of them right!";
            document.getElementById("a2").innerHTML = "I think you must have some experience about fake news, ";
            document.getElementById("a3").innerHTML = "go share your story for our community!";
        }
    } else {
        alert("Please choose the answer");
    }
});

//user select 
document.getElementById("qt1").addEventListener('click', function () {
    isContinue = true;
    if (choice1 == false) {
        document.getElementById("qt1").value = "Wrong";
        document.getElementById("qt1").style.backgroundColor = "red";
        choice1 = true;
    } else {
        alert("You've already chosen");
    }
});

document.getElementById("qf1").addEventListener('click', function () {
    isContinue = true;
    if (choice1 == false) {
        rightNumber += 1;
        document.getElementById("qf1").value = "Right";
        document.getElementById("qf1").style.backgroundColor = "green";
        choice1 = true;
    } else {
        alert("You've already chosen");
    }
});

document.getElementById("qt2").addEventListener('click', function () {
    isContinue = true;
    if (choice2 == false) {
        document.getElementById("qt2").value = "Wrong";
        document.getElementById("qt2").style.backgroundColor = "red";
        choice2 = true;
    } else {
        alert("You've already chosen");
    }
});

document.getElementById("qf2").addEventListener('click', function () {
    isContinue = true;
    if (choice2 == false) {
        rightNumber += 1;
        document.getElementById("qf2").value = "Right";
        document.getElementById("qf2").style.backgroundColor = "green";
        choice2 = true;
    } else {
        alert("You've already chosen");
    }
});

document.getElementById("qt3").addEventListener('click', function () {
    isContinue = true;
    if (choice3 == false) {
        rightNumber += 1;
        document.getElementById("qt3").value = "Right";
        document.getElementById("qt3").style.backgroundColor = "green";
        choice3 = true;
    } else {
        alert("You've already chosen");
    }
});

document.getElementById("qf3").addEventListener('click', function () {
    isContinue = true;
    if (choice3 == false) {
        document.getElementById("qf3").value = "Wrong";
        document.getElementById("qf3").style.backgroundColor = "red";
        choice3 = true;
    } else {
        alert("You've already chosen");
    }
});



//share experience
document.getElementById("shareBtn").addEventListener('click', function () {
    document.getElementById("fakeNew").style.display = "none";
    document.getElementById("share").style.display = "block";
});

//goEnd
document.getElementById("goEnd").addEventListener('click', function () {
    document.getElementById("share").style.display = "none";
    document.getElementById("end").style.display = "block";
});


//Navigation bar click event
document.getElementById("goHome").addEventListener('click', function () {
    document.getElementById("About").style.display = "none";
    document.getElementById("fakeNew").style.display = "none";
    document.getElementById("share").style.display = "none";
    document.getElementById("end").style.display = "none";
    document.getElementsByClassName("q1")[0].style.display = "none";
    document.getElementsByClassName("q1")[1].style.display = "none";
    document.getElementsByClassName("q1")[2].style.display = "none";
    document.getElementById("Home").style.display = "block";
});

document.getElementById("goAbout").addEventListener('click', function () {
    document.getElementById("About").style.display = "block";
    document.getElementById("fakeNew").style.display = "none";
    document.getElementById("share").style.display = "none";
    document.getElementById("end").style.display = "none";
    document.getElementsByClassName("q1")[0].style.display = "none";
    document.getElementsByClassName("q1")[1].style.display = "none";
    document.getElementsByClassName("q1")[2].style.display = "none";
    document.getElementById("Home").style.display = "none";
});

document.getElementById("goGame").addEventListener('click', function () {
    document.getElementById("About").style.display = "none";
    document.getElementById("fakeNew").style.display = "none";
    document.getElementById("share").style.display = "none";
    document.getElementById("end").style.display = "none";
    document.getElementsByClassName("q1")[0].style.display = "block";
    document.getElementsByClassName("q1")[1].style.display = "none";
    document.getElementsByClassName("q1")[2].style.display = "none";
    document.getElementById("Home").style.display = "none";
});

document.getElementById("goShare").addEventListener('click', function () {
    document.getElementById("About").style.display = "none";
    document.getElementById("fakeNew").style.display = "none";
    document.getElementById("share").style.display = "block";
    document.getElementById("end").style.display = "none";
    document.getElementsByClassName("q1")[0].style.display = "none";
    document.getElementsByClassName("q1")[1].style.display = "none";
    document.getElementsByClassName("q1")[2].style.display = "none";
    document.getElementById("Home").style.display = "none";
});


