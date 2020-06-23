//To open and close the main sidepanel

function openNav() {
    document.getElementById("mainSide").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mainSide").style.width = "0";
    document.getElementById("catSub").style.width = "0";
    document.getElementById("mainSide").style.overflowX = "hidden";
    document.getElementById("sub1").style.visibility = "hidden";
  }

//To open and close the submenus on hover
let cat = document.getElementById("catalogue");
let sub1 = document.getElementById("sub1"); //This is the first submenu from "Catálogo."
let sub2 = document.getElementById("sub2"); //This is the second submenu from "Tortas"

//These functions will be called from the html
function openSubnav(x){
      x.style.visibility = "visible";
      x.style.opacity = "1";
      x.style.backgroundColor= "#111";
      document.getElementById("mainSide").style.overflowX = "visible";
  }

  function closeSubnav(x){
    x.style.visibility = "hidden";
    x.style.opacity = "0";
    document.getElementById("mainSide").style.overflowX = "hidden";
  }