/* NOTES SECTION 

1. Refer to Advance-Js-notes Text file in below file path 
"D:\Studies-Notes\1. Javascript\4. Advance Javascript - adding listeners" 

2. Refer to Understanding objects in Javascript 
D:\Studies-Notes\1. Javascript\4. Advance Javascript - adding listeners

*/

// global variables 
var soundPath;
var key;

/*Common Object with Properties. Note "CommonObjectForLetter" is a constructor function
This function desfines/constructs the properties of object */
function CommonObjectForLetter (soundPath, key) {
    this.soundPath = soundPath;
    this.key =  key;
    this.playSound = function () {
        var audio = new Audio(this.soundPath);
        audio.play();
    }
}

// common function

function buttonAnimation(currentKey) {
    var buttonPressed = document.querySelector("."+currentKey);
    buttonPressed.classList.add("pressed");
    setTimeout(function (){
        buttonPressed.classList.remove("pressed");
    },100);
} 
// Creating Letter specific Objects using constructor function
var ObjectForW = new CommonObjectForLetter("sounds/crash.mp3" , "w");

var ObjectForA = new CommonObjectForLetter("sounds/kick-bass.mp3","a");

var ObjectForS = new CommonObjectForLetter("sounds/snare.mp3","s"); 

var ObjectForD = new CommonObjectForLetter("sounds/tom-1.mp3","d");

var ObjectForJ = new CommonObjectForLetter("sounds/tom-2.mp3","j");

var ObjectForK = new CommonObjectForLetter("sounds/tom-3.mp3","k");

var ObjectForL = new CommonObjectForLetter("sounds/tom-4.mp3","l");


//Adding event listener when clicked on UI buttons
document.querySelector("button[class*='w']").addEventListener("click", function () {
    ObjectForW.playSound();
    buttonAnimation('w');
});

document.querySelector("button[class*='a']").addEventListener("click", function () {
    ObjectForA.playSound();
    buttonAnimation('w');
});

document.querySelector("button[class*='s']").addEventListener("click", function () {
    ObjectForS.playSound();
    buttonAnimation('s');
});

document.querySelector("button[class='d drum']").addEventListener("click", function () {
    ObjectForD.playSound();
    buttonAnimation('d');
});

document.querySelector("button[class*='j']").addEventListener("click", function () {
    ObjectForJ.playSound();
    buttonAnimation('j');
});

document.querySelector("button[class*='k']").addEventListener("click", function () {
    ObjectForK.playSound();
    buttonAnimation('k');
});

document.querySelector("button[class*='l']").addEventListener("click", function () {
    ObjectForL.playSound();
    buttonAnimation('l');
});


//Adding event listener when keyboard buttons are clicked
document.addEventListener("keypress", Event => {
    var enteredKey = Event.key;
    switch (enteredKey.toLowerCase()) {
        case "w":
            ObjectForW.playSound();
            buttonAnimation('w');
            break;
        case "a":
            ObjectForA.playSound();
            buttonAnimation('a');
            break;
        case "s":
            ObjectForS.playSound();
            buttonAnimation('s');
             break;
        case "d":
            ObjectForD.playSound();
            buttonAnimation('d');
             break;
        case "j":
            ObjectForJ.playSound();
            buttonAnimation('j');
             break;
        case "k":
            ObjectForK.playSound();
            buttonAnimation('k');
              break;
        case "l":
            ObjectForL.playSound();
            buttonAnimation('l');
              break;
        default:
            alert("Invalid Key Pressed. Enter valid key a, s, d, j, k, l");
            break;
    }
})