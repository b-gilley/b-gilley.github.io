let sidebarEl = document.getElementById("sidebar");

let sideToggleEl = document.getElementById("sidebarToggle");

var sideClass = sidebarEl.class;

if(sideToggleEl) sideToggleEl.addEventListener("click", function(event) {
		sidebarEl.classList.toggle("stowed")
});






