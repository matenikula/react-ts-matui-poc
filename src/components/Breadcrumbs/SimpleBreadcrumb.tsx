import { Breadcrumbs, Link } from '@material-ui/core';
import React from 'react';

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    alert(`You clicked the ${event.currentTarget.text} breadcrumb`)
}

export default function SimpleBreadcrumb() {
    return (
        <Breadcrumbs>
            <Link color="inherit" onClick={handleClick}>Home</Link>
            <Link color="textPrimary" onClick={handleClick}>UI elements</Link>
        </Breadcrumbs>
    )
};
