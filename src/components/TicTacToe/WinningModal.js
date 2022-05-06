/** @jsxImportSource @emotion/react */
// import { jsx } from '@emotion/react'
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TicTacToeColors } from '../../constants/constants'

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
        color: TicTacToeColors.textColor,
        fontWeight: 'bold',
        backgroundColor: TicTacToeColors.tieColor,
        border: 'none',
        borderRadius: '15px',
        boxShadow: `0 5px ${TicTacToeColors.tieShadow}`,
        '&:hover': {
            backgroundColor: TicTacToeColors.tieShadow
        },
        '&:active': {
            backgroundColor: TicTacToeColors.tieShadow,
            boxShadow: '0 5px #666',
            transform: 'translateY(4px)'
        },
    },
    nextButton: {
        textTransform: 'uppercase',
        marginRight: 10,
        display: 'inline-block',
        padding: '15px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        textAlign: 'center',
        textDecoration: 'none',
        outline: 'none',
        color: TicTacToeColors.textColor,
        fontWeight: 'bold',
        backgroundColor: TicTacToeColors.oColor,
        border: 'none',
        borderRadius: '10px',
        boxShadow: `0 5px ${TicTacToeColors.oShadow}`,
        '&:hover': {
            backgroundColor: TicTacToeColors.oShadow
        },
        '&:active': {
            backgroundColor: TicTacToeColors.oShadow,
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
        height: "20%",
        minHeight: 275,
        width: '100%',
        backgroundColor: TicTacToeColors.modal,
        position: "absolute",
        top: "50%",
        left: "50%",
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
        paddingBottom: 10
    },
    youWonText: {
        color: TicTacToeColors.tieColor,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    playerText: {
        fontSize: 70,
        textAlign: "center",
        fontWeight: "bold",
        margin: 0
    }
}))

export default function WinningModal({ close, player, playerMark, handleNextRound }) {
    const classes = useStyles()
    const playerColors = {
        'X': TicTacToeColors.xColor,
        'tie': TicTacToeColors.tieColor,
        'O': TicTacToeColors.oColor
    }
    const winner = playerMark ? 'X' : 'O'
  
    return (
        <div className={classes.overlay}>
            <div className={classes.modal}>
                <div className={classes.centerBox}>
                    {player === 'X' || player === 'O' ?
                        < div className={classes.youWonText}>{player === winner ? 'you won!' : 'you lost!'}</div> 
                        :
                        <div className={classes.youWonText}>you tied!</div>
                     }
                    <div className={classes.flexRow}>
                        <p css={{ color: playerColors[player] }} className={classes.playerText}>
                            {player === 'X' || player === 'O' ? player : 'Cats Game'}
                        </p>
                        {(player === 'X' || player === 'O') &&
                            <>
                                <p
                                    css={{
                                        fontSize: 38,
                                        textTransform: 'uppercase',
                                        color: playerColors[player]
                                    }}
                                    className={classes.playerText}
                                >
                                    &nbsp;&nbsp;&nbsp;takes the round
                                </p>
                            </>
                        }
                    </div>
                        <div className={classes.flexRow}>
                            <button 
                                className={classes.quitButton} 
                                onClick={() => close(false)}
                            >
                                Quit
                            </button>
                            <button
                                className={classes.nextButton}
                                onClick={() => {
                                    close(false)
                                    handleNextRound()
                                }}
                            >
                                Next Round
                            </button>
                        </div>
                    </div>
                </div>
            </div >
            );
        }
