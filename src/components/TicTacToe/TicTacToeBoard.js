/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import refresh from '../../images/refreshicon.png'

//orange - #F2B136
//teal - #55C3BC
//background - #1A2A33
//tile - #1A2A33
//shadow - #1A2A33
//tie - #A8BFC9
const oColor = '#F2B136'
const xColor = '#31C3BD'

const useStyles = makeStyles((theme) => ({
    grid: {
        width: 120,
        height: 120,
        position: 'relative'
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: 'red',
        width: 400,
        paddingBottom: 10
    },
    boardSpan: {
        position: 'absolute',
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: 'white',
        fontSize: 30,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    headerX: {
        color: xColor,
        fontSize: 50,
        fontWeight: 'bold',
        margin: 0
    },
    turnButton: {
        backgroundColor: '#1F3641',
        borderBottom: 'solid 4px #10212A',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#A8BFC9',
        padding: '12px 25px',
        borderRadius: 10
    },
    refreshButton: {
        backgroundColor: '#A8BFC9',
        borderBottom: 'solid 4px #6B8997',
        padding: '15px 18px',
        borderRadius: 10
    },
    scoreButton: {
        backgroundColor: oColor,
        // borderBottom: 'solid 4px #10212A',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#203641',
        height: 70,
        width: 125,
        // padding: '10px 35px',
        borderRadius: 20,
        // height: 70
    },
    scoreText: {
        marginTop: 0
    },
    score: {
        fontSize: '2em',
        marginTop: -10,
        marginBottom: -5
    }
}))


export default function TicTacToeBoard() {
    const classes = useStyles()
    const [gridDimensions] = useState({ width: 3, height: 3 })

    const createGameBoard = () => {
        const rows = [];
        for (let i = 0; i < gridDimensions.height; i++) {
            rows.push(Array.from(Array(gridDimensions.width), () => 0))
        }
        return rows
    }

    const [grid, setGrid] = useState(() => createGameBoard())
    const [player, setPlayer] = useState('x')
    const playerColor = player === 'x' ? '#31C3BD' : '#F2B136'

    return (
        <>
            <div className={classes.flexRow}>
                <p className={classes.headerX}>X<span css={{ color: oColor }}>O</span></p>
                <button className={classes.turnButton}><span css={{ color: playerColor, fontSize: 20 }}>O </span> turn</button>
                <button className={classes.refreshButton}><img css={{ height: 20, width: 20 }} src={refresh}></img></button>
            </div>
            <div
                css={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${gridDimensions.width}, 120px)`,
                    gridGap: '15px 20px',
                    marginBottom: 30
                }}
            >
                {grid.map((rows, i) => {
                    return rows.map((col, k) => {
                        return (
                            <div
                                key={`${i}-${k}`}
                                className={classes.grid}
                                style={{
                                    borderRadius: 10,
                                    backgroundColor: '#1F3641',
                                    borderBottom: 'solid 8px #10212A'
                                }}
                            >
                                <span className={classes.boardSpan}>
                                    {grid[i][k] !== 0 && grid[i][k]}
                                </span>
                            </div>
                        )
                    })
                }
                )}
            </div>
            <div className={classes.flexRow}>
                <button className={classes.scoreButton}>
                    <p className={classes.scoreText}>O (You)</p>
                    <p className={classes.score}>O</p>
                </button>
                <button css={{backgroundColor: '#A8BFC9' }}className={classes.scoreButton}>
                    <p className={classes.scoreText}>Ties</p>
                    <p className={classes.score}>O</p>
                </button>
                <button css={{backgroundColor: oColor}} className={classes.scoreButton}>
                    <p className={classes.scoreText}>X (CPU)</p>
                    <p className={classes.score}>O</p>
                </button>
            </div>
        </>
    )
}