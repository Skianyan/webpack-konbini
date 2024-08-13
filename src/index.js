import "./style.css";
import { displayMenu } from "./menu";
import { displayHome } from "./home";
import { displayAbout } from "./about";
import Background from "./background.jpg";

document.body.style.backgroundImage = Background;

const nav = document.getElementById("navigation");

let tabContents = [
	{
		title: "Home",
		displayFunction: displayHome,
	},
	{
		title: "Products",
		displayFunction: displayMenu,
	},
	{
		title: "About",
		displayFunction: displayAbout,
	},
];
tabContents.forEach((tab) => {
	const newTab = document.createElement("div");
	newTab.classList.add("tab");
	newTab.textContent = tab.title;
	newTab.addEventListener("click", tab.displayFunction);
	nav.appendChild(newTab);
});

displayHome();
