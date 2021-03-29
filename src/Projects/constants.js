import spotify from "./../assets/spotify.png";
import minesweeper from "./../assets/minesweeper.png";
import portfolio from "./../assets/portfolio.png";

export const PROJECTS = [
	{
		name: "Spotify Card Deck",
		description: `An integration with Spotify's API built with VueJS to generate a card deck based on your listening habits.`,
		demo: "https://stebs.dev/spotify-card-deck",
		repo: "https://github.com/stebsnusch/spotify-card-deck",
		image: spotify,
	},
	{
		name: "Minesweeper",
		description: "A simple minesweeper game built with Vanilla Javascript.",
		demo: "https://stebsnusch.github.io/minesweeper/",
		repo: "https://github.com/stebsnusch/minesweeper",
		image: minesweeper,
	},
	{
		name: "Portfolio",
		description:
			"This very page, made with React, Material UI, styled-components and more interesting libraries.",
		demo: "#",
		repo: "https://github.com/stebsnusch/stebsnusch.github.io",
		image: portfolio,
	},
];
