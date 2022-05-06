/** @jsxImportSource @emotion/react */
import { makeStyles } from "@material-ui/core/styles";
import TicTacToeBoard from '../components/TicTacToe/TicTacToeBoard'
import { useState, useEffect } from 'react'
import { TicTacToeColors } from '../constants/constants'

const oColor = TicTacToeColors.oColor
const xColor = TicTacToeColors.xColor

const useStyles = makeStyles((theme) => ({
    flexContainerColumn: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '25%',
        width: '50%',
    },
    flexContainerColumnInner: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minWidth: 400,
        maxWidth: 500,
        backgroundColor: TicTacToeColors.tile,
        boxShadow: '0 8px #10212A',
        borderRadius: 10,
        marginBottom: 20
    },
    flexContainerRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        minWidth: 350,
        maxWidth: 500,
        borderRadius: 10
    },
    background: {
        height: '100vh'
    },
    headerX: {
        color: xColor,
        fontSize: 50,
        fontWeight: 'bold',
        margin: 0,
        marginBottom: 20
    },
    text: {
        color: TicTacToeColors.tieColor,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    reminderText: {
        color: TicTacToeColors.reminderTextColor,
        textTransform: 'uppercase'
    },
    playerMarkOuter: {
        borderRadius: 10,
        width: '50%',
        height: 60,
        textAlign: 'center',
        position: 'relative',
        transition: 'background-color .5s ease-out',
    },
    playerMark: {
        position: 'absolute',
        left: '50%',
        top: '40%',
        transform: "translate(-50%, -50%)",
        fontSize: '60px',
        fontWeight: 'bold'
    },
    newGameButton: {
        display: 'inline-block',
        padding: '20px 15px',
        marginTop: 20,
        marginBottom: 10,
        marginRight: 5,
        fontSize: '16px',
        cursor: 'pointer',
        textAlign: 'center',
        textDecoration: 'none',
        outline: 'none',
        border: 'none',
        borderRadius: '15px',
        width: '100%',
        minWidth: 400,
        maxWidth: 500,
        fontWeight: 'bold'
    },
    orange: {
        color: TicTacToeColors.textColor,
        backgroundColor: TicTacToeColors.oColor,
        boxShadow: `0 8px ${TicTacToeColors.oShadow}`
    },
    teal: {
        color: TicTacToeColors.textColor,
        backgroundColor: TicTacToeColors.xColor,
        boxShadow: `0 8px ${TicTacToeColors.xShadow}`
    },
    active: {
        color: TicTacToeColors.tieColor,
        backgroundColor: TicTacToeColors.textColor
    },
    notActive: {
        color: TicTacToeColors.textColor,
        backgroundColor: TicTacToeColors.tieColor
    }
}))

export default function TicTacToe() {

    const classes = useStyles()
    const [openBoard, setOpenBoard] = useState(false)
    const [active, setActive] = useState(true) // X is true, and 0 is false 

    const handleNewGame = () => {
        setOpenBoard(true)
    }

    return (
        <div css={{ backgroundColor: TicTacToeColors.backgroundColor }} className={classes.background}>
            <div className={classes.flexContainerColumn}>
                <h1 css={{ color: 'white' }}>TicTacToe</h1>
                {openBoard ?
                    <TicTacToeBoard playerMark={active} setOpenBoard={setOpenBoard}></TicTacToeBoard>
                    :
                    <>
                        <p className={classes.headerX}>X<span css={{ color: oColor }}>O</span></p>
                        <div className={classes.flexContainerColumnInner}>
                            <p className={classes.text}>Pick Player 1's Mark</p>
                            <div className={classes.flexContainerRow}>
                                <div
                                    onClick={() => setActive(prev => !prev)}
                                    className={`${classes.playerMarkOuter} ${!active ? classes.active : classes.notActive}`}
                                >
                                    <span className={classes.playerMark}>x</span>
                                </div>
                                <div
                                    onClick={() => setActive(prev => !prev)}
                                    className={`${classes.playerMarkOuter} ${active ? classes.active : classes.notActive}`}
                                >
                                    <span className={classes.playerMark}>o</span>
                                </div>
                            </div>
                            <p className={classes.reminderText}>Remember: X goes first </p>
                        </div>
                        <button
                            onClick={() => handleNewGame()}
                            className={`${classes.newGameButton} ${classes.orange}`}
                        >
                            New Game (VS CPU)
                        </button>
                        <button className={`${classes.newGameButton} ${classes.teal}`}>
                            New Game (VS PLAYER)
                        </button>
                    </>
                }
            </div >
        </div >
    )
}