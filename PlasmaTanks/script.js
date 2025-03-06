window.onload = function(){
    var iframe = document.getElementById("iframe");
    var fullbutton = document.getElementById("fullscreenButton");

    fullbutton.onclick = function() {
        console.log("Requested fullscreen")
         iframe.requestFullscreen();
     }
 };