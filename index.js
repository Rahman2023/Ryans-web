const menuicon = document.getElementById("menuIcon");
const menu = document.getElementById("navbar_main");


menuicon.addEventListener("click", function () {
    
    if (menu.className == "hideMenu") {
        menu.classList.remove("hideMenu");
    } else{
        menu.classList.add("hideMenu");
        
    }
    console.log("click")
})