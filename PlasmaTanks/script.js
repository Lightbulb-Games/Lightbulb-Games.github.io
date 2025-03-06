let iframe = document.getElementById("iframe");


console.log("Script loaded (v0.1)")

function game_fullscreen()
    {
        console.log("Fullscreen clicked");
        iframe.requestFullscreen();
    };

document.getElementById("fullscreenButton").addEventListener("click", game_fullscreen);
