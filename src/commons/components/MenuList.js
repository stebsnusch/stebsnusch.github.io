import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import profilePic from "./../../assets/profilepic.png";
import { Drawer, Typography, Avatar, Box, IconButton } from "@material-ui/core";
import { SECTIONS } from "./../constants";
import { SOCIALS } from "../../Contact/constants";

export const MenuList = ({ open, toggleMenu, isMobile }) => {
	const useStyles = makeStyles((theme) => ({
		paper: {
			backgroundColor: theme.palette.initial.default,
			minWidth: isMobile ? "60%" : "500px",
			display: "flex",
			padding: theme.spacing(2),
			alignItems: "center",
		},
		large: {
			width: isMobile ? "70px" : "120px",
			height: isMobile ? "70px" : "120px",
			marginRight: theme.spacing(2),
		},
		list: {
			height: "100%",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			textAlign: "center",
			width: "100%",
		},
		listItem: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			fontSize: "1.5rem",
		},
	}));

	const classes = useStyles();

	const handleClick = (item) => {
		const section = document.getElementById(item);
		section.scrollIntoView({ behavior: "smooth" });
		toggleMenu(!open);
	};

	return (
		<Drawer classes={{ paper: classes.paper }} open={open} onClose={toggleMenu}>
			<Box display="flex" alignItems="center" justifyContent="center">
				<Avatar className={classes.large} src={profilePic} />
				<Box>
					<Typography
						style={{
							fontSize: isMobile ? "1.5rem" : "2.5rem",
							fontWeight: 500,
						}}
						gutterBottom={!isMobile && false}
					>
						Stephany Nusch
					</Typography>
					<Typography
						variant="h3"
						style={{ fontWeight: 300, fontSize: "1.5rem" }}
					>
						Frontend Engineer
					</Typography>
				</Box>
			</Box>
			<List className={classes.list}>
				{SECTIONS.map((item, index) => (
					<ListItem
						className={classes.listItem}
						key={index}
						onClick={() => {
							handleClick(item.id);
						}}
						button
					>
						{item.id.toUpperCase()}
					</ListItem>
				))}
			</List>
			<Box align="center">
				{SOCIALS.map((item, index) => (
					<IconButton
						key={index}
						href={item.url}
						alt={item.name}
						target="_blank"
					>
						<item.icon fontSize="large" color="secondary" />
					</IconButton>
				))}
			</Box>
		</Drawer>
	);
};
