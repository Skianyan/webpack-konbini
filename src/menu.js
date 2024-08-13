import Chips from "./freePik_chips.png";
import Drink from "./pngtree_energyDrink.png";
import Lighter from "./pngfre_lighter.png";
import Cookies from "./purepng_cookies.png";

export function displayMenu() {
	const content = document.getElementById("content");
	content.textContent = ""; // Resets the text on the page before loading the new page

	const title = document.createElement("div");
	title.className = "title";
	title.textContent = "Products";
	content.appendChild(title);

	let boxContents = [
		{
			title: "Energy Drinks",
			img: Drink,
			text: "may not have the best flavors stocked",
		},
		{
			title: "Various chips",
			img: Chips,
			text: "grab the sour cream and onion, coward",
		},
		{
			title: "Selection of cookies",
			img: Cookies,
			text: "yes im still a child at heart",
		},
		{
			title: "Lighter",
			img: Lighter,
			text: "might come in handy",
		},
	];

	boxContents.forEach((box) => {
		const newbox = document.createElement("div");
		newbox.className = "box";

		const newboxtitle = document.createElement("div");
		newboxtitle.className = "title";
		newboxtitle.textContent = box.title;
		newbox.appendChild(newboxtitle);

		const newboximage = new Image(100, 100);
		newboximage.className = "image";
		newboximage.src = box.img;
		newbox.appendChild(newboximage);

		const newboxtext = document.createElement("div");
		newboxtext.textContent = box.text;
		newbox.appendChild(newboxtext);
		content.appendChild(newbox);
	});
}
