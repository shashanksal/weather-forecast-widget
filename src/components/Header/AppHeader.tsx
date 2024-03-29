import React from "react";

//Material UI imports
import { AppBar, Typography, Toolbar, Paper } from "@material-ui/core";

const styles = {
	headStyle: {
		textAlign: "center",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	appBar: {
		background: "#009688",
		alignItems: "center"
	}
};

const AppHeader = () => {
	return (
		<Paper>
			<AppBar position="static" style={styles.appBar}>
				<Toolbar>
					<Typography variant="h5" align="center">
						Weather Forecast Tool
					</Typography>
				</Toolbar>
			</AppBar>
		</Paper>
	);
};

export default AppHeader;
