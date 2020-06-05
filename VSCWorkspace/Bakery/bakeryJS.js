function openNav() {
    document.getElementById("mainSide").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mainSide").style.width = "0";
    document.getElementById("catSub").style.width = "0";
  }

  function openSubnav(){
      document.getElementById("catSub").style.opacity = "1"
      document.getElementById("catSub").style.backgroundColor= "white";
      document.getElementById("catSub").style.zIndex = "88";
  }