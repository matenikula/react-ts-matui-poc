import { makeStyles, Paper, Tab, Tabs } from '@material-ui/core';
import React, { useState } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import DialogsShowcase from '../Dialogs/DialogsShowcase';
import SnackbarShowcase from '../Snackbars/SnackbarShowcase';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function SimpleTab() {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <BrowserRouter>
            <Paper className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Dialog" component={Link} to="/dialog"/>
                    <Tab label="Notification" component={Link} to="/notification"/>
                </Tabs>
            </Paper>

            <Switch>
                <Route path="/dialog" component={DialogsShowcase}/>
                <Route path="/notification" component={SnackbarShowcase}/>
                {/*this route is necessary so the DialogShowcase loads automatically on navigation to the /ui route*/}
                <Route path="/ui" component={DialogsShowcase}/>
            </Switch>
        </BrowserRouter>
    );
}
