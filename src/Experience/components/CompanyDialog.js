import React from "react";

import {
	Dialog,
	DialogContent,
	DialogTitle,
	Typography,
} from "@material-ui/core";
import { CloseButton } from "./CloseButton";

export const CompanyDialog = ({ company, open, setOpen }) => {
	const onClose = () => setOpen(false);
	return (
		<Dialog open={open} onClose={onClose} maxWidth="md">
			<DialogTitle disableTypography>
				<Typography variant="h6">{company.name}</Typography>
				<CloseButton onClose={onClose} />
			</DialogTitle>
			<DialogContent dividers>{company.description}</DialogContent>
		</Dialog>
	);
};
