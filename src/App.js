import React, { Fragment, useState } from "react";
import "intersection-observer";
import { withTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { SECTIONS } from "./commons/constants";
import SectionBox from "./commons/components/SectionBox";
import { Menu } from "./commons/components/Menu";
import { MenuList } from "./commons/components/MenuList";

const App = ({ theme }) => {
	const [open, setOpen] = useState(false);
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const toggleMenu = () => setOpen(!open);
	return (
		<Fragment>
			<Menu openMenu={toggleMenu} theme={theme} />
			{SECTIONS.map((section, index) => (
				<SectionBox
					key={index}
					backgroundcolor={section.backgroundColor}
					id={section.id}
					isMobile={isMobile}
					theme={theme}
				>
					<section.component />
				</SectionBox>
			))}
			<MenuList
				open={open}
				toggleMenu={toggleMenu}
				theme={theme}
				isMobile={isMobile}
			/>
		</Fragment>
	);
};

export default withTheme(App);
