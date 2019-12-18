import {
    AppBar,
    Button,
    createStyles,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    makeStyles,
    Theme,
    Toolbar,
    Tooltip,
    Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { useState } from 'react';


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
        appBar: {
            position: 'relative',
        },
    }),
);

export default function DialogsShowcase() {
    const classes = useStyles();
    const [showSimpleDialog, setShowSimpleDialog] = useState<boolean>(false);
    const [showFullScreenDialog, setShowFullScreenDialog] = useState<boolean>(false);

    return (
        <div className={classes.root}>
            <Tooltip title="Open simple dialog" placement="left">
                <Button variant="outlined" color="primary" onClick={() => setShowSimpleDialog(true)}>Simple dialog</Button>
            </Tooltip>
            <Tooltip title="Open fullscreen dialog" placement="right">
                <Button variant="outlined" color="primary" onClick={() => setShowFullScreenDialog(true)}>Full screen dialog</Button>
            </Tooltip>


            {/*simple dialog*/}
            <Dialog open={showSimpleDialog} onClose={() => setShowSimpleDialog(false)}>
                <DialogTitle>I am a simple dialog</DialogTitle>
                <DialogContent>
                    <DialogContentText>Hello and welcome to the simple dialog.</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" disableElevation color="primary" onClick={() => setShowSimpleDialog(false)}
                            autoFocus>Hi</Button>
                    <Button variant="contained" disableElevation color="primary" onClick={() => setShowSimpleDialog(false)}>Go away</Button>
                </DialogActions>
            </Dialog>

            {/*fullscreen dialog*/}
            <Dialog fullScreen open={showFullScreenDialog} onClose={() => setShowFullScreenDialog(false)}>
                <AppBar color="secondary" className={classes.appBar}>
                    <Toolbar>
                        <Button color="inherit" autoFocus onClick={() => setShowFullScreenDialog(false)}>Close</Button>
                    </Toolbar>
                </AppBar>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Expansion Panel 1</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            Spicy jalapeno bacon ipsum dolor amet turducken tenderloin ground round, pancetta ham salami venison leberkas
                            t-bone kielbasa pig landjaeger cow andouille.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Expansion Panel 2</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            Pastrami bresaola turducken drumstick picanha salami. Sirloin salami pork loin prosciutto turducken fatback ham
                            short ribs beef cupim.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Dialog>
        </div>);
}
