/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import refresh from '../../images/refreshicon.png'
import produce from "immer";
import { WinningCombinations, IndexToPositionMap } from '../../constants/constants'
import WinningModal from './WinningModal'
import RestartModal from './RestartModal'
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
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#203641',
        height: 70,
        width: 125,
        borderRadius: 20,
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


export default function TicTacToeBoard({ playerMark, setOpenBoard }) {
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
    const [player, setPlayer] = useState(true)
    const playerColor = player === true ? '#31C3BD' : '#F2B136'
    const currentPlayer = player ? 'X' : 'O'
    const [colorMap, setColorMap] = useState()
    const [xPositions, setXPositions] = useState([])
    const [oPositions, setOPositions] = useState([])
    const [winner, setWinner] = useState()
    const [openWinningModal, setOpenWinningModal] = useState()
    const [openRestartModal, setOpenRestartModal] = useState()

    const [xScore, setXScore] = useState(0)
    const [oScore, setOScore] = useState(0)
    const [tScore, setTScore] = useState(0)

    // const [endGameText, setEndGameText] = useState()

    const handlePlayerMove = (currentRow, currentColumn) => {

        const newGrid = produce(grid, gridCopy => {
            gridCopy[currentRow][currentColumn] = currentPlayer
        });
        setGrid(newGrid)

        player ?
            setXPositions(prev => [...prev, IndexToPositionMap[`${currentRow}-${currentColumn}`]])
            :
            setOPositions(prev => [...prev, IndexToPositionMap[`${currentRow}-${currentColumn}`]])

        const indexString = `${currentRow}-${currentColumn}`
        setColorMap(prev => ({ ...prev, [indexString]: playerColor }))
    }

    useEffect(() => {
        if (xPositions.length >= 3 || oPositions.length >= 3) {
            setTimeout(() => {
                setOpenWinningModal(true)
            }, 1000)
        }
    }, [winner])

    const calculateWinner = (winner, setScore) => {
        if (checkWinner()) {
            setWinner(winner)
            console.log('in check winner')
            setScore(prev => prev + 1)
        } else {
            //Prevent from switching players on initial render
            if (xPositions.length > 0) {
                setPlayer(prev => !prev)
            }

            //If length === 9, all spots on board are taken, game ends (tie)
            if (xPositions.length + oPositions.length === 9) {
                setWinner('tie')
                setTScore(prev => prev + 1)
            }
        }
    }

    const checkWinner = () => {
        let winner = false
        for (const key in WinningCombinations) {
            const winningCombo = WinningCombinations[key]
            let count = 0
            // debugger
            winningCombo.forEach((index) => {
                let currentPositions = player ? xPositions : oPositions
                if (currentPositions.includes(index)) count++
                if (count === 3) return winner = true
            })
        }
        return winner
    }

    useEffect(() => {
        //Check for a winner, if not switch players
        calculateWinner("X", setXScore)
    }, [xPositions])

    useEffect(() => {
        calculateWinner("O", setOScore)
    }, [oPositions])


    const handleNextGameClick = () => {
        setGrid(createGameBoard())
        setXPositions([])
        setOPositions([])
    }

    const handleRefresh = () => {
        setOpenRestartModal(true)
    }

    const handleRestart = () => {
        setOpenBoard(prev => !prev)
    }
    // console.log(playerMark)
    // console.log(player)
    console.log(xPositions, oPositions)
    console.log(grid)
    console.log(player, winner)
    return (
        <>
            <div className={classes.flexRow}>
                <p className={classes.headerX}>X<span css={{ color: oColor }}>O</span></p>
                <div className={classes.turnButton}><span css={{ color: playerColor, fontSize: 20 }}>{currentPlayer} </span> turn</div>
                <button
                    className={classes.refreshButton}
                    onClick={() => handleRefresh()}
                >
                    <img alt='Refresh icon' css={{ height: 20, width: 20 }} src={refresh} />
                </button>
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
                                onClick={() => handlePlayerMove(i, k)}
                                key={`${i}-${k}`}
                                className={classes.grid}
                                style={{
                                    borderRadius: 10,
                                    backgroundColor: '#1F3641',
                                    borderBottom: grid[i][k] === 0 ? 'solid 8px #10212A' : 'solid 4px #10212A',
                                    transitions: 'border-bottom 3s'
                                }}
                            >
                                <span
                                    css={{
                                        color: colorMap && colorMap[`${i}-${k}`] ? colorMap[`${i}-${k}`] : null,
                                        fontSize: '4em'
                                    }}
                                    className={classes.boardSpan}
                                >
                                    {grid[i][k] !== 0 && grid[i][k]}
                                </span>
                            </div>
                        )
                    })
                }
                )}
            </div>
            <div className={classes.flexRow}>
                <button css={{ backgroundColor: playerMark ? xColor : oColor }} className={classes.scoreButton}>
                    <p className={classes.scoreText}>{playerMark ? 'X' : '0'} (You)</p>
                    <p className={classes.score}>{playerMark ? xScore : oScore}</p>
                </button>
                <button css={{ backgroundColor: '#A8BFC9' }} className={classes.scoreButton}>
                    <p className={classes.scoreText}>Ties</p>
                    <p className={classes.score}>{tScore}</p>
                </button>
                <button css={{ backgroundColor: !playerMark ? xColor : oColor }} className={classes.scoreButton}>
                    <p className={classes.scoreText}>{!playerMark ? 'X' : '0'} CPU</p>
                    <p className={classes.score}>{!playerMark ? xScore : oScore}</p>
                </button>
            </div>
            {openWinningModal && <WinningModal close={setOpenWinningModal} player={winner} playerMark ={playerMark} handleNextRound={handleNextGameClick} />}
            {openRestartModal && <RestartModal close={setOpenRestartModal} handleRestart={handleRestart} />}

        </>
    )
}