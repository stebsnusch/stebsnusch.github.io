import React, { Fragment } from "react";
import { Box, Typography } from "@material-ui/core";

export const COMPANIES = [
	{
		name: "QuintoAndar",
		period: "12/2019 - Current",
		role: "Software Engineer",
		size: 8,
		description: (
			<Fragment>
				<Box mb={2}>
					<Typography component="p" variant="subtitle1">
						As a QuintoAndar Software Engineer, I get to be challenged every
						single day. Not only I am able to build confidence in various
						technologies, but I also get to maintain a relationship with Product
						Owners and Designers as well as with other Engineers.
					</Typography>
				</Box>
				<Box mb={2}>
					<Typography component="p" variant="subtitle1">
						I have increased my <strong>Javascript</strong> proficiency with
						<strong> React</strong> considerably and also have made valuable
						contributions to our <strong>System Design</strong> library.
					</Typography>
				</Box>
				<Box mb={2}>
					<Typography component="p" variant="subtitle1">
						This was also my first experience working with{" "}
						<strong>Jest </strong>
						and <strong>testing-library</strong> (Javascript testing frameworks)
						and learning about <strong>Software Architecture</strong>. My team
						constantly promotes Tech Talks in order to share knowledge through
						our peers.
					</Typography>
				</Box>
				<Box mb={2}>
					<Typography component="p" variant="subtitle1">
						The projects I worked with have improved significantly the internal
						Operations team experience, making the company's lead conversion
						increase and, consequently, broadening the company's revenue.
					</Typography>
				</Box>
				<Box mb={2}>
					<Typography component="p" variant="subtitle1">
						As we have freedom within the company to lead our own initiatives,
						my first one was helping improve our overall guidelines as much as
						possible. I am also very present in gender equality actions together
						with other female engineers.
					</Typography>
				</Box>
			</Fragment>
		),
	},
	{
		name: "Proradis",
		period: "04/2019 - 11/2019",
		role: "Fullstack Developer",
		size: 4,
		description: (
			<Fragment>
				<Box mb={2}>
					<Typography component="p" variant="subtitle1">
						At PRORADIS, I have helped build multi-platform{" "}
						<strong>mobile</strong> applications with <strong>Flutter</strong>{" "}
						and <strong>Dart</strong>. I also had the opportunity to learn a bit
						of <strong>C#</strong> along the way and have my first experience
						with back-end applications.
					</Typography>
				</Box>
				<Box mb={2}>
					<Typography component="p" variant="subtitle1">
						Since the company was on the Medicine field, the project I worked in
						focused on making patients reports available online through our
						platform. Basically, we intermediated the process of a Doctor
						writing uploading patient's reports - alongside pictures and any
						related files - online and making it available for download.
					</Typography>
				</Box>
			</Fragment>
		),
	},
	{
		name: "Vitrio",
		period: "08/2018 - 04/2019",
		role: "Web Developer",
		size: 3,
		description: (
			<Fragment>
				<Box mb={2}>
					<Typography component="p" variant="subtitle1">
						During my time in Vitrio, I had the chance to work with the
						e-commerce platform VTEX along with <strong>React</strong> and help
						clients increase their sales with high performing pages. I also got
						to learn about <strong>Google Analytics</strong> and how to gather
						customer data in order to deliver a highly customized experience
						during further access.
					</Typography>
				</Box>
			</Fragment>
		),
	},
	{
		name: "Épico Digital",
		period: "09/2016 - 07/2018",
		role: "Web Developer",
		size: 6,
		description: (
			<Fragment>
				<Box mb={2}>
					<Typography component="p" variant="subtitle1">
						My experience working in Epico has taught me a lot about{" "}
						<strong>teamwork</strong> and coding <strong>best practices</strong>
						. I had the opportunity to work with highly skilled developers that
						guided me all the way.
					</Typography>
				</Box>
				<Box mb={2}>
					<Typography component="p" variant="subtitle1">
						I used a lot of the CSS Framework <strong>Bootstrap</strong> and the
						preprocessor <strong>Sass</strong>, as well as <strong>PHP</strong>{" "}
						with Laravel. I had to learn how to look through the documentation
						of each technology to understand all their possibilities.
					</Typography>
				</Box>
				<Box mb={2}>
					<Typography component="p" variant="subtitle1">
						Another very important thing I learned was how to use{" "}
						<strong>Javascript frameworks</strong>. It was the first time I ever
						heard of <strong>Angular</strong> and <strong>VueJS</strong>, that
						became everyday tools to me.
					</Typography>
				</Box>
			</Fragment>
		),
	},
	{
		name: "D1UP",
		period: "08/2018 - 04/2019",
		role: "Web Developer",
		size: 3,
		description: (
			<Fragment>
				<Box mb={2}>
					<Typography component="p" variant="subtitle1">
						I have participated in the company as an intern, but as soon as I
						finished college, I was hired. At D1UP we build websites to promote
						either our client's business or punctual actions.
					</Typography>
				</Box>
				<Box mb={2}>
					<Typography component="p" variant="subtitle1">
						I got to learn a lot about <strong>CSS</strong> properties and best
						practices and <strong>Semantic HTML</strong>.
					</Typography>
				</Box>
				<Box mb={2}>
					<Typography component="p" variant="subtitle1">
						Working with a multidisciplinary team has made me understand how to
						respect schedules and how to communicate with Product Owners and
						Designers to deliver the best product to the end-user.
					</Typography>
				</Box>
			</Fragment>
		),
	},
];
