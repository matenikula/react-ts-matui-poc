import { IconButton, Menu, MenuItem } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import React, { useState } from 'react';

export default function SimpleMenu() {
    const [anchor, setAnchor] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget);
        setAnchor(event.currentTarget);
    };

    const handleClose = () => {
        setAnchor(null);
    };

    return (
        <div>
            <IconButton onClick={handleClick} color="inherit">
                <MenuIcon />
            </IconButton>
            <Menu
                keepMounted
                anchorEl={anchor}
                open={Boolean(anchor)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><AccountCircleIcon/> &nbsp; My Account</MenuItem>
                <MenuItem onClick={handleClose}><SettingsIcon/> &nbsp; Settings</MenuItem>
            </Menu>
        </div>
    );
};
