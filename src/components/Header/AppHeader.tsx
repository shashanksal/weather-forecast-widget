import React from 'react';

import {
    AppBar,
    Typography,
    Toolbar,
    Paper
} from '@material-ui/core';

const styles = {
    headStyle: {
        textAlign: 'center',
    }
}

const AppHeader = (props: any) => {
    return (
        <Paper>
            <AppBar position="static" style={{ background: '#009688' }}>
                <Toolbar>
                    <Typography variant="h6" className="headStyle" align="center">
                        Weather Forecast Tool
                </Typography>
                </Toolbar>
            </AppBar>
        </Paper>
    )
}

export default AppHeader;
