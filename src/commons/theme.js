import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
	shape: {
		borderRadius: 30,
	},
	typography: {
		fontFamily: "Ubuntu",
		h1: {
			fontSize: "5rem",
			fontWeight: "700",
			"@media (max-width:600px)": {
				fontSize: "2.5rem",
			},
		},
		h2: {
			fontWeight: "700",
			fontSize: "4rem",
			"@media (max-width:600px)": {
				fontSize: "2rem",
			},
		},
		h3: {
			fontWeight: "700",
			fontSize: "4rem",
			"@media (max-width:600px)": {
				fontSize: "1.5rem",
			},
		},
		body1: {
			fontSize: "2rem",
			fontWeight: "300",
			"@media (max-width:600px)": {
				fontSize: "1.2rem",
			},
		},
	},
	palette: {
		text: {
			primary: "#2F5061",
			secondary: "#F4EAE6",
		},
		primary: {
			main: "#E57F84",
			light: "#ffd1da",
		},
		secondary: {
			main: "#2F5061",
		},
		tertiary: {
			main: "#4297A0",
		},
		initial: {
			default: "#F4EAE6",
		},
	},
});
