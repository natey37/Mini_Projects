/** @jsxImportSource @emotion/react */
import { makeStyles } from "@material-ui/core/styles";
import TicTacToeBoard from '../components/TicTacToe/TicTacToeBoard'
import { useState, useEffect } from 'react'

const oColor = '#F2B136'
const xColor = '#31C3BD'

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
        backgroundColor: '#1F3641',
        boxShadow: '0 8px #10212A',
        borderRadius: 10,
        marginBottom: 20
    },
    flexContainerRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // border: `solid 10px ${theme.ticTacToePallete}`,
        width: '90%',
        minWidth: 350,
        borderRadius: 10
    },
    background: {
        // backgroundColor: '#1A2A33',
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
        color: '#A8BFC9',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    reminderText: {
        color: '#647985',
        textTransform: 'uppercase'
    },
    playerMarkX: {
        borderRadius: 10,
        width: '50%',
        height: 60,
        textAlign: 'center',
        position: 'relative',
        transition: 'background-color .5s ease-out',
    },
    playerMarkO: {
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
        fontWeight: 'bold'
    },
    orange: {
        color: '#1a2a33',
        backgroundColor: '#F2B137',
        boxShadow: '0 5px #CC8B11',
    }
}))

export default function TicTacToe() {

    const classes = useStyles()
    const [color, setColor] = useState('#1A2A33')
    const [openBoard, setOpenBoard] = useState(false)
    const [active, setActive] = useState(true) // X is true, and 0 is false 


    const handleNewGame = () => {
        setOpenBoard(true)
    }

    return (
        <div css={{ backgroundColor: color }} className={classes.background}>
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
                                    className={classes.playerMarkX}
                                    css={{
                                        color: !active ? '#A8BFC9' : '#1A2A33',
                                        backgroundColor: active ? '#A8BFC9' : '#1A2A33'
                                    }}
                                >
                                    <span className={classes.playerMark}>x</span>
                                </div>
                                <div
                                    onClick={() => setActive(prev => !prev)}
                                    className={classes.playerMarkO}
                                    css={{
                                        color: active ? '#A8BFC9' : '#1A2A33',
                                        backgroundColor: !active ? '#A8BFC9' : '#1A2A33'
                                    }}
                                >
                                    <span className={classes.playerMark}>o</span>
                                </div>
                            </div>
                            <p className={classes.reminderText}>Remember: X goes first </p>
                        </div>
                        <button
                            //ADD ANOTHER COLOR CLASS, HOW DO YOU ADD TEO CLASSES TO CLASSNAME????!!!!
                            onClick={() => handleNewGame()}
                            className={classes.newGameButton}
                            css={{
                                color: '#1a2a33',
                                backgroundColor: '#F2B137',
                                boxShadow: '0 8px #CC8B11'
                            }}
                        >
                            New Game (VS CPU)
                        </button>
                        <button
                            disabled
                            className={classes.newGameButton}
                            css={{
                                color: '#1a2a33',
                                backgroundColor: '#31C3BD',
                                boxShadow: '0 8px #108C86'
                            }}
                        >
                            New Game (VS PLAYER)
                        </button>
                    </>
                }
            </div >
        </div >
    )
}