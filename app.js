var menuBtn = document.querySelector("#btnMenu");
var closeBtn = document.querySelector("#closeBtn");
var sideMenu = document.getElementById("sideMenu");

function handleClick () {
  sideMenu.style.display = "none";
}

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
})
closeBtn.addEventListener("click", handleClick);