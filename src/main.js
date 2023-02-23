let list = document.querySelectorAll(".list li");
function activeList() {
  list.forEach((item) => item.classList.remove("hovered"));
  this.classList.add("hovered");
}
list.forEach((item) => item.addEventListener("mouseover", activeList));
// the toggle of the aside
let toggle = document.getElementById("nav-toggle")
let content = document.getElementById("content")
let sidebar = document.querySelector(".sidebar")
toggle.addEventListener("click" , ()=> {
  content.classList.toggle("content__show");
  sidebar.classList.toggle("sidebar__show")
})