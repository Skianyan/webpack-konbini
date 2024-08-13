export function displayAbout() {
	const content = document.getElementById("content");
	content.textContent = ""; // Resets the text on the page before loading the new page

	const title = document.createElement("div");
	title.className = "title";
	title.textContent = "About.";
	content.appendChild(title);

	let boxContents = [
		{
			title: "Author",
			text: "skianyan@github.com",
		},
		{
			title: "Image credits",
			text: "Freepik - Chips, pngfre - lighter, pngtree - energy drink, purepng - cookies",
		},
	];

	boxContents.forEach((box) => {
		const newbox = document.createElement("div");
		newbox.className = "box";

		const newboxtitle = document.createElement("div");
		newboxtitle.className = "title";
		newboxtitle.textContent = box.title;
		newbox.appendChild(newboxtitle);
		const newboxtext = document.createElement("div");
		newboxtext.textContent = box.text;
		newbox.appendChild(newboxtext);
		content.appendChild(newbox);
	});
}
