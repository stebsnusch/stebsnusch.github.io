import { theme } from "./theme";
import Home from "../Home";
import About from "../About";
import Experience from "../Experience";
import Projects from "../Projects";
import Contact from "../Contact";

export const SECTIONS = [
	{
		id: "home",
		component: Home,
		backgroundColor: theme.palette.initial.default,
	},
	{
		id: "about",
		component: About,
		backgroundColor: theme.palette.primary.main,
	},
	{
		id: "experience",
		component: Experience,
		backgroundColor: theme.palette.secondary.main,
	},
	{
		id: "projects",
		component: Projects,
		backgroundColor: theme.palette.initial.default,
	},
	{
		id: "contact",
		component: Contact,
		backgroundColor: theme.palette.secondary.main,
	},
];
