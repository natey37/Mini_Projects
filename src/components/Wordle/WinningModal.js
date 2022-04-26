/** @jsxImportSource @emotion/react */
// import { jsx } from '@emotion/react'
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    button: {
        display: 'inline-block',
        padding: '10px 15px',
        fontSize: '16px',
        cursor: 'pointer',
        textAlign: 'center',
        textDecoration: 'none',
        outline: 'none',
        color: 'black',
        backgroundColor: theme.palette.primary.main,
        border: 'none',
        borderRadius: '15px',
        boxShadow: `0 5px ${theme.palette.secondary.light}`,
        '&:hover': {
            backgroundColor: theme.palette.primary.light
        },
        '&:active': {
            backgroundColor: theme.palette.success.main,
            boxShadow: '0 5px #666',
            transform: 'translateY(4px)'
        },
    },
    overlay: {
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgb(0,0,0,0.5)",
        zIndex: 100,
        cursor: "pointer"
    },
    modal: {
        border: "solid 3px red",
        height: "50%",
        minHeight: 300,
        width: '50%',
        borderRadius: 20,
        backgroundColor: "#FDC0FF",
        position: "absolute",
        top: "50%",
        left: "50%",
        color: "#D924FF",
        transform: "translate(-50%,-50%)",
        msTransform: "translate(-50%,-50%)",
    },
    centerBox: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    text: {
        padding: 40,
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold",
    }

}))

export default function WinningModal({ close, text }) {
    const classes = useStyles()

    return (
        <div className={classes.overlay}>
            <div className={classes.modal}>
                <div className={classes.centerBox}>
                    <div className={classes.text}>
                        {text}
                    </div>
                    <button className={classes.button} onClick={() => close(false)}>Close</button>
                </div>
            </div>
        </div >
    );
}
