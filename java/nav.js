function drop() {
    var dropCont = document.getElementById("drop-cont");
    var downI = document.getElementById("downA");
    var upI = document.getElementById("upA");
    
    if (dropCont.style.display === "none"){
        dropCont.style.display = "flex";
        dropCont.style.flexDirection = "column";
        downI.style.display = "none";
        upI.style.display = "flex";

    }
    else{
        dropCont.style.display = "none";
        upI.style.display = "none";
        downI.style.display = "flex";
    }
}


function change(){
    var checkB = document.getElementById("checkbox");
    var Tspan = document.getElementById("top");
    var Mspan = document.getElementById("middle");
    var Bspan = document.getElementById("bottom");
    var toggleNav = document.getElementById("overlay");

    if(checkB.checked == 1){
        Mspan.style.opacity="0";
        Tspan.style.transform=" rotate(45deg) translate(0, -0px)";
        Tspan.style.top = "22px";
        Tspan.style.left = "20px";
        Bspan.style.transform=" rotate(-45deg) translate(0, -9px)";
        Bspan.style.top = "29px";
        Bspan.style.left = "25px";
        toggleNav.style.visibility = "visible";
        toggleNav.style.display = "inherit";
        // toggleNav.style.transition= "all 3.4s fade";
    }
    else{
        Mspan.style.opacity="1";
        Tspan.style.transform=" rotate(0deg) translate(0, -0px)";
        Tspan.style.top = "11px";
        Tspan.style.left = "20px";
        Bspan.style.transform=" rotate(0deg) translate(0, -1px)";
        Bspan.style.top = "33px";
        Bspan.style.left = "20px";
        toggleNav.style.visibility = "hidden";
    }
}