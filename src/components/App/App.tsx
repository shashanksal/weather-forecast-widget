import React from 'react';

//Material UI Components
import {
    CssBaseline
} from '@material-ui/core/';

//Custom components
import AppHeader from '../Header';
import MainBody from '../MainBody';
import '../../App.css';

const App = () => {
    return (
        <React.Fragment>
            <CssBaseline>
                <AppHeader></AppHeader>
                <MainBody></MainBody>
            </CssBaseline>
        </React.Fragment>
    );
}

export default App;
