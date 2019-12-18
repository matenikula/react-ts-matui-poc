import { Button, createStyles, makeStyles, Slide, Snackbar, Theme } from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';
import React, { useState } from 'react';

function SlideTransition(props: TransitionProps) {
    return <Slide {...props} direction="up" />;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: '10px',
            display: 'flex',
            justifyContent: 'center',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }),
);


export default function SnackbarShowcase() {
    const classes = useStyles();
    const [showSimpleSnackbar, setShowSimpleSnackbar] = useState(false);
    const [showSlidingSnackbar, setShowSlidingSnackbar] = useState(false);

    return (
        <div className={classes.root}>
            <Button variant="outlined" color="primary" onClick={() => setShowSimpleSnackbar(true)}>Simple notification</Button>
            <Button variant="outlined" color="primary" onClick={() => setShowSlidingSnackbar(true)}>Sliding notification</Button>


            {/*simple snackbar*/}
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={showSimpleSnackbar}
                autoHideDuration={4000}
                onClose={() => setShowSimpleSnackbar(false)}
                message={<span>You have been notified</span>}
                action={
                    <Button key="dismiss" size="small" color="secondary" onClick={() => setShowSimpleSnackbar(false)}>
                        Dismiss
                    </Button>
                }
            />

            {/*sliding snackbar*/}
            <Snackbar
                open={showSlidingSnackbar}
                autoHideDuration={4000}
                onClose={() => setShowSlidingSnackbar(false)}
                message={<span>Sliding toast incoming!</span>}
                TransitionComponent={SlideTransition}
                action={
                    <Button key="dismiss" size="small" color="secondary" onClick={() => setShowSlidingSnackbar(false)}>
                        Cool
                    </Button>
                }
            />
        </div>
    );
}
