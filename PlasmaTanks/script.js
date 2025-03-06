console.log("Loaded script v0.3")

window.onload = function(){
    console.log("Window loaded")
    //alert("Window loaded")
    var iframe = document.getElementById("iframe");
    var fullbutton = document.getElementById("fullscreenButton");

    fullbutton.onclick = function() {
        console.log("Requested fullscreen")
        //alert("Game should go fullscreen. Ignore if it doesn't")
         iframe.requestFullscreen();
     }
 };