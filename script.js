document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});

function onClickMenu() {
    var menuContainer = document.getElementById("menu-container");
    
    menuContainer.classList.toggle("menu-open");
}
