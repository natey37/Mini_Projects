/** @jsxImportSource @emotion/react */
// import { jsx } from '@emotion/react'
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    quitButton: {
        textTransform: 'uppercase',
        marginRight: 10,
        display: 'inline-block',
        padding: '15px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        textAlign: 'center',
        textDecoration: 'none',
        outline: 'none',
        color: '#1A2A33',
        fontWeight: 'bold',
        backgroundColor: '#A8BFC9',
        border: 'none',
        borderRadius: '10px',
        boxShadow: `0 5px #6B8997`,
        '&:hover': {
            backgroundColor: '#6B8997'
        },
        '&:active': {
            backgroundColor: '#6B8997',
            boxShadow: '0 5px #666',
            transform: 'translateY(4px)'
        },
    },
    nextButton: {
        textTransform: 'uppercase',
        // marginRight: 10,
        display: 'inline-block',
        padding: '15px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        textAlign: 'center',
        textDecoration: 'none',
        outline: 'none',
        color: '#1A2A33',
        fontWeight: 'bold',
        backgroundColor: '#F2B136',
        border: 'none',
        borderRadius: '10px',
        boxShadow: `0 5px #CC8B13`,
        '&:hover': {
            backgroundColor: '#CC8B13'
        },
        '&:active': {
            backgroundColor: '#CC8B13',
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
        // border: "solid 3px red",
        height: "20%",
        minHeight: 275,
        width: '100%',
        // borderRadius: 20,
        backgroundColor: "#1F3641",
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
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        // backgroundColor: 'red',
        // width: 400,
        paddingBottom: 10,
    },
    playerText: {
        // padding: 40,
        // color: '#F2B136',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 45,
        textAlign: "center",
        fontWeight: "bold",
        margin: 0,
        color: '#A8BFC9',
        marginBottom: 20

    }
}))

export default function RestartModal({ close, handleRestart }) {
    const classes = useStyles()
    // const playerColors = {
    //     'X': '#31C3BD',
    //     'tie': '#A8BFC9',
    //     'O': '#F2B136'
    // }
    // console.log(player)
    // const playerColor = player === 'X' ? '#31C3BD' : '#F2B136'
    // const playerBorderShadow = player === 'X' ? : '#CC8B13'
    return (
        <div className={classes.overlay}>
            <div className={classes.modal}>
                <div className={classes.centerBox}>
                    <p className={classes.playerText}>
                        Restart Game
                    </p>
                    <div className={classes.flexRow}>
                        <button className={classes.quitButton} onClick={() => close(false)}>No, Cancel</button>
                        <button
                            className={classes.nextButton}
                            onClick={() => {
                                handleRestart()
                                // handleNextRound()
                            }}
                        >
                            Yes, Restart
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}
