import React, { Fragment, useRef } from "react";
import { withTheme } from "@material-ui/core/styles";
import { useIsVisible } from "react-is-visible";

import { Box, Container, IconButton, Typography } from "@material-ui/core";

import { MailButton, MailCopy, MailInput } from "./components/MailCopy";
import { SOCIALS } from "./constants";

export const Contact = ({ theme }) => {
	const nodeRef = useRef();
	const isVisible = useIsVisible(nodeRef);
	const copyEmail = () => {
		const emailAddress = document.getElementById("email");
		emailAddress.select();
		emailAddress.setSelectionRange(0, 99999);
		document.execCommand("copy");
	};
	return (
		<Box display="flex" width="100%" ref={nodeRef}>
			{isVisible && (
				<Fragment>
					<Container maxWidth="md">
						<Box mb={5}>
							<Typography
								variant="h3"
								component="h3"
								color="primary"
								align="center"
							>
								Contact me!
							</Typography>
						</Box>
						<Box align="center" mb={5}>
							<MailCopy display="flex" alignItems="center" theme={theme}>
								<MailInput theme={theme} value="contact@stebs.dev" id="email" />
								<MailButton
									size="large"
									color="primary"
									variant="contained"
									onClick={copyEmail}
									theme={theme}
									disableElevation
								>
									copy
								</MailButton>
							</MailCopy>
						</Box>
						<Box align="center">
							{SOCIALS.map((item, index) => (
								<IconButton
									key={index}
									href={item.url}
									alt={item.name}
									target="_blank"
								>
									<item.icon fontSize="large" color="primary" />
								</IconButton>
							))}
						</Box>
					</Container>
				</Fragment>
			)}
		</Box>
	);
};

export default withTheme(Contact);
