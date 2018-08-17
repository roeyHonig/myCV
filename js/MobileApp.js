
var firstPress = true;
var initialHeight;
var numActive;

$(document).ready(function(){
    
     console.log("Hello from mobile")
     
     
 });

 function mtFunction(p) {
    var elmnt = document.getElementById("Mobile");    
     var panalElement = document.getElementsByClassName("panel");

    // retrives the initail height
     if (firstPress) initialHeight = $("#Mobile").height();

     // opens pressed panel
     if (panalElement[p].style.maxHeight == "0px" || firstPress) { 
        panalElement[p].style.maxHeight = panalElement[p].scrollHeight + "px";
        firstPress = false;
        
     } else {
        panalElement[p].style.maxHeight = 0 + "px";
     }
     // closes all other panels
     for (i = 0; i < panalElement.length; i++) {
         if (i != p) {
            panalElement[i].style.maxHeight = 0 + "px";
         }
     }
    // toggels Active class for the button
    var accordionElement = document.getElementsByClassName("accordion");
    accordionElement[p].classList.toggle("Active");
    for (i = 0; i < accordionElement.length; i++) {
        if (i != p) {
            accordionElement[i].classList.remove("Active");
        }
    }
    
    
    

 }