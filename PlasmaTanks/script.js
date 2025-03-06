let iframe = document.getElementById("iframe");
let toggleButton = document.getElementById("fullscreenButton");

console.log("Script loaded")

function fullscreen()
    {
        console.log("Fullscreen clicked");
        iframe.requestFullscreen();
    };
