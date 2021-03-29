import React, { Fragment, useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { theme } from "../../commons/theme";

import { Card, CardContent, Grid, Typography } from "@material-ui/core";

import { CompanyDialog } from "./CompanyDialog";

export const CompanyCard = ({ company }) => {
	const [open, setOpen] = useState(false);
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	const handleClick = () => setOpen(true);

	return (
		<Fragment>
			<Card style={{ cursor: "pointer" }} onClick={handleClick} elevation={0}>
				<CardContent>
					<Grid alignItems="center" container>
						<Grid item md={12} sm={8} xs={8}>
							<Typography variant="h5" component="h5">
								{company.name}
							</Typography>
							<Typography variant="subtitle1">{company.role}</Typography>
						</Grid>
						<Grid
							align={isMobile ? "center" : "inherit"}
							md={12}
							sm={4}
							xs={4}
							container
							item
						>
							<Typography variant="caption" color="primary">
								{company.period}
							</Typography>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
			<CompanyDialog company={company} open={open} setOpen={setOpen} />
		</Fragment>
	);
};
