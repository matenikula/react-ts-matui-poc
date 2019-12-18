import { AppBar, createStyles, Link, makeStyles, Theme, Toolbar } from '@material-ui/core';
import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import SimpleMenu from '../Menu/SimpleMenu ';

const navLink = React.forwardRef<HTMLAnchorElement, RouterLinkProps>((props, ref) => (<RouterLink innerRef={ref} {...props}/>));

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiLink-root': {
                marginLeft: theme.spacing(2),
            },
        },
    }),
);

export default function Navbar() {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.root}>
                <SimpleMenu/>
                <Link color="inherit" component={navLink} to="/form">
                    Simple form
                </Link>
                <Link color="inherit" component={navLink} to="/list">
                    App List
                </Link>
                <Link color="inherit" component={navLink} to="/ui">
                    UI elements
                </Link>
            </Toolbar>
        </AppBar>
    );
}
