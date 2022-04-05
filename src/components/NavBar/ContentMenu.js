import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
/** @jsxImportSource @emotion/react */
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        "& .MuiPaper-root": {
            backgroundColor: theme.palette.secondary.light
        }
    }
}))

export default function ContentMenu() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ color: 'black' }}
            >
                <MenuIcon />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                className={classes.paper}            >
                <Link to='/'><MenuItem onClick={handleClose}>Home</MenuItem></Link>
                <Link to='/game_of_life'><MenuItem onClick={handleClose}>Game of Life</MenuItem></Link>
            </Menu>
        </div>
    );
}
