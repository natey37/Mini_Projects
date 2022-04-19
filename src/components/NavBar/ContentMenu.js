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
    },
    menuLink: {
        textDecoration: 'none',
    },
    menuOption: {
        color: theme.palette.info.dark,
        '&:hover': {
            color: theme.palette.primary.main,
        }
    }
}))

const menuOptions = [
    {
        path: '/',
        pathString: 'Home'
    },
    {
        path: '/game_of_life',
        pathString: 'Game of Life'
    },
    {
        path: '/wordle',
        pathString: 'Wordle'
    }
]

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

    const MenuLink = ({path, pathString}) => {
        return (
            <>
                <Link className={classes.menuLink} to={path}>
                    <MenuItem className={classes.menuOption} onClick={handleClose}>{pathString}</MenuItem>
                </Link>
            </>
        )
    }

    const displayMenuLinks = menuOptions.map((option) => {
        return ( 
            <MenuLink
                key={option.path}
                path={option.path}
                pathString={option.pathString}
            />
        )
    })
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
                className={classes.paper}
            >
                {menuOptions.map((option) => {
                    return (
                        <div>
                            <MenuLink
                                key={option.path}
                                path={option.path}
                                pathString={option.pathString}
                            />
                        </div>
                    )
                })}
            </Menu>
        </div>
    );
}
