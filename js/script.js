var wrap = document
var menu = document.querySelector(".menu-container");
var menuLink = document.querySelector(".burger");
var exit = document.querySelector(".close");
var mainBody = document.querySelector("body");
var searchButton = document.querySelector(".search");
var search = document.querySelector(".search-container");
var inputSearch = document.querySelector(".search-input");


menuLink.addEventListener("click", function (evt) { 
  evt.preventDefault();
  menu.classList.add("menu-container-active");
});

exit.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.remove("menu-container-active");
});

wrap.addEventListener("click" , function(e) {
  if (e.target != document.getElementById("toggle-search"))	 {
    search.classList.remove("search-container-active");
	} else {
		  search.classList.add("search-container-active");
		  inputSearch.focus();
	}
});