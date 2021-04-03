import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

//Material UI Components
import { Card, CardContent, Typography, CardMedia, Grid } from "@material-ui/core";

import { WEATHER_ICONS_URL } from "../../utils/constants";

const styles = {
	card: {
		minWidth: 190
	},
	date: {
		marginBottom: 16,
		fontSize: 18
	},
	info: {
		marginBottom: 12
	},
	weatherIco: {
		width: 50,
		height: 50,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		margin: "10px 50px"
	},
	temp: {
		fontWeight: 600,
		fontSize: 28
	}
};

const WeatherCard = (props: any) => {
	const { classes } = props;
	let icoUrl = `${WEATHER_ICONS_URL}${props.weather_state_abbr}.svg`;

	return (
		<div>
			<Card className={classes.card}>
				<CardContent>
					<Typography className={classes.date} color="textPrimary" align="center">
						{new Date(props.applicable_date).toDateString()}
					</Typography>
					<CardMedia className={classes.weatherIco} image={icoUrl} title="Weather Icon" />
					<Typography className={classes.info} color="textSecondary" align="center">
						{props.weather_state_name}
					</Typography>
					<Grid container spacing={6}>
						<Grid item md={6}>
							<Typography variant="body2" align="center">
								Max Temp (°C)
							</Typography>
							<Typography variant="body1" align="center" className={classes.temp}>
								{Math.round(props.max_temp * 10) / 10}
							</Typography>
						</Grid>
						<Grid item md={6}>
							<Typography variant="body2" align="center">
								Min Temp (°C)
							</Typography>
							<Typography variant="body1" align="center" className={classes.temp}>
								{Math.round(props.min_temp * 10) / 10}
							</Typography>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</div>
	);
};

WeatherCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WeatherCard);
