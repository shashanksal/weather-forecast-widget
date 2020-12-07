import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    CardMedia
} from '@material-ui/core';


const styles = {
    card: {
        minWidth: 175,
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    weatherIco: {
        width: 50,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: "10px 50px"
    },
};

function SimpleCard(props: any) {
    const { classes } = props;

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary">
                        Date
                    </Typography>
                    <CardMedia
                        className={classes.weatherIco}
                        image="https://www.metaweather.com//static/img/weather/lc.svg"
                        title="Weather Icon"
                    />
                    <Typography className={classes.pos} color="textSecondary">
                        Details
                    </Typography>
                    <Typography component="p">
                        Additional details
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
