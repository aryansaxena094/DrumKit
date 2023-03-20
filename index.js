// Getting length
var all = document.querySelectorAll(".drum").length;

//Detecting Mouse press
for(let i = 0; i < all; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var button = this.innerHTML;
        makeSound(button);
        animation(button);
    });
}

//Detecting Keyboard Press
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    animation(event.key);
})

//Function to make sound
function makeSound(button){
    switch(button){
        case "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
        
        case "a":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
        
        case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
        
        case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
        
        case "j":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
        
        case "k":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
        
        case "l":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
        
        default:
        alert("This button is not specified yet!");
        break;
    }
}

function animation(button){
    var active = document.querySelector("." + button);
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed");
    }, 50)
}