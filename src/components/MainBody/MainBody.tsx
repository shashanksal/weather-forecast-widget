import React from 'react';

//Material UI Components
import {
    Paper,
    Grid
} from '@material-ui/core';

//Custom component import
import LocationForm from '../LocationForm';
import WeatherWidget from '../WeatherWidget';
import Image from '../../assets/pexels-kaique-rocha-125510.jpg';

const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    content: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    }
}

const MainBody = (props: any) => {

    return (
        <Paper style={styles.paperContainer}>
            <div style={styles.content}>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '50vh' }}
                    className="containier-gridbox"
                >
                    <Grid item xs={5}>
                        <LocationForm></LocationForm>

                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justify="center"
                >
                    <Grid item xs={8}>
                        <WeatherWidget></WeatherWidget>
                    </Grid>

                </Grid>
            </div>
        </Paper>
    )
}

export default MainBody;