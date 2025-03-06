let iframe = document.getElementById("iframe");
let toggleButton = document.getElementById("fullscreenButton");

console.log("Script loaded (v0.1)")

function fullscreen()
    {
        console.log("Fullscreen clicked");
        iframe.requestFullscreen();
    };
