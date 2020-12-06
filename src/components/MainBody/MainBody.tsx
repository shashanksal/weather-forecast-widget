import React from 'react';

//Material UI Components
import {
    Paper,
    Grid
} from '@material-ui/core';

//Custom component import
import LocationForm from '../LocationForm';
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
                >
                    <Grid item xs={4}>
                        <LocationForm></LocationForm>
                    </Grid>
                </Grid>
            </div>
        </Paper>
    )
}

export default MainBody;