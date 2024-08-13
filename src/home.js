export function displayHome() {
	const content = document.getElementById("content");
	content.textContent = ""; // Resets the text on the page before loading the new page

	const title = document.createElement("div");
	title.className = "title";
	title.textContent = "Ode to convenience stores";
	content.appendChild(title);

	let boxContents = [
		{
			title: "Setting the Scene.",
			text: "Have you ever been in a time of need? its 2am on a thursday night, no store open in sight, at the end of a long and dim street you see a light, ''could it be?'' - you think to yourself, ''i think it is!'' - says your buddy, almost passed out. and so it was, a konbini saves your life once again",
		},
		{
			title: "Hours",
			text: "24/7 365 days a year",
		},
		{
			title: "Location",
			text: "Spawns whenever you need one the most",
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
