import React, { useState, useCallback, useRef } from 'react'
import produce from "immer";
import { makeStyles } from "@material-ui/core/styles";
import { operations } from '../../constants/constants'

const useStyles = makeStyles((theme) => ({
    disabledButton: {
        marginRight: 5,
        display: 'inline-block',
        padding: '10px 15px',
        fontSize: '16px',
        cursor: 'pointer',
        textAlign: 'center',
        textDecoration: 'none',
        outline: 'none',
        color: 'black',
        backgroundColor: theme.palette.error.main,
        border: 'none',
        borderRadius: '15px',
        boxShadow: `0 5px ${theme.palette.secondary.light}`,
    },
    button: {
        marginRight: 5,
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
    areaInput: {
        border: `solid 2px ${theme.palette.info.main}`,
        marginRight: 10,
        padding: '10px 15px',
        fontSize: '16px',
        width: 50
    },
    areaRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        whiteSpace: 'no-wrap',
        fontSize: 20
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5px',
        // marginRight: 5
    },
    info: {
        postion: 'absolute',
        left: -100,
        height: 200,
        width: 200,
        backgroundColor: 'red'
    },
    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5px',
        marginLeft: 50
    },
    grid: {
        border: `solid 5px ${theme.palette.primary.main}`
    },
    smallGrid: {
        // marginLeft: '20%',
        border: `solid 5px ${theme.palette.primary.main}`
    }
}))

export default function GameContainer({ width, height, setCreateBoard, setHideRules }) {
    const classes = useStyles()
    const [gridDimensions] = useState({
        width: width,
        height: height
    })
    const [color, setColor] = useState('#FFC0CB')

    const createGameBoard = () => {
        const rows = [];
        for (let i = 0; i < gridDimensions.width; i++) {
            rows.push(Array.from(Array(gridDimensions.height), () => 0))
        }
        return rows
    }

    const [grid, setGrid] = useState(() => createGameBoard())
    const [interval, setInterval] = useState(1000)
    const [running, setRunning] = useState(false);

    const runningRef = useRef(running)
    runningRef.current = running
    const intervalRef = useRef(interval)
    intervalRef.current = interval

    const runSimulation = useCallback(() => {
        if (!runningRef.current) {
            return
        }
        setGrid(g => {
            return produce(g, gridCopy => {
                for (let i = 0; i < gridDimensions.height; i++) {
                    for (let k = 0; k < gridDimensions.width; k++) {
                        let neighbors = 0;
                        operations.forEach(([x, y]) => {
                            const newI = i + x;
                            const newK = k + y;
                            if (newI >= 0 && newI < gridDimensions.width && newK >= 0 && newK < gridDimensions.height) {
                                neighbors += g[newI][newK];
                            }
                        });

                        if (neighbors < 2 || neighbors > 3) {
                            gridCopy[i][k] = 0;
                        } else if (g[i][k] === 0 && neighbors === 3) {
                            gridCopy[i][k] = 1;
                        }
                    }
                }
            });
        });

        setTimeout(runSimulation, intervalRef.current)
    }, [])

    const handleRandom = () => {
        let newBoard = createGameBoard()

        for (let y = 0; y < gridDimensions.width; y++) {
            for (let x = 0; x < gridDimensions.height; x++) {
                newBoard[y][x] = (Math.random() >= 0.5)
            }
        }
        setGrid(newBoard)
    }

    return (
        <>
            <div className={classes.flexRow}>
                <button
                    className={classes.button}
                    onClick={() => {
                        setRunning(prev => !prev)
                        if (!running) {
                            runningRef.current = true
                            runSimulation()
                        }
                    }}
                >
                    {!running ? 'Start' : 'Stop'}
                </button>
                <button
                    className={running ? classes.disabledButton : classes.button}
                    disabled={running}
                    onClick={() => setGrid(createGameBoard)}
                >
                    Clear
                </button>
                <button
                    className={running ? classes.disabledButton : classes.button}
                    disabled={running}
                    onClick={() => handleRandom()}
                >
                    Random
                </button>
                <button
                    className={running ? classes.disabledButton : classes.button}
                    disabled={running}
                    onClick={() => {
                        setCreateBoard(false)
                        setHideRules(false)
                    }}
                >
                    New Board
            </button>
            </div>
            <div className={classes.flexRow}>
                <div className={classes.areaRow}>
                    <div className={classes.label}>Set Interval:&nbsp;</div>
                    <input
                        className={classes.areaInput}
                        disabled={running}
                        value={interval}
                        onChange={(e) => setInterval(parseInt(e.target.value) || '')}
                    />
                    <div className={classes.label}>m/s</div>
                </div>
                <div className={classes.flexColumn}>
                    <label className={classes.label}>Color</label>
                    <input type="color" onChange={(e) => setColor(e.target.value)} value={color}></input>
                </div>
            </div>


            <div
                // className={width === 10 ? classes.smallGrid : classes.grid}
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${gridDimensions.width}, 20px)`,
                    border: `solid 5px ${color}`
                }}
            >
                {grid.map((rows, i) => {
                    return rows.map((col, k) => {
                        return (
                            <div
                                key={`${i}-${k}`}
                                onClick={(() => {
                                    const newGrid = produce(grid, gridCopy => {
                                        gridCopy[i][k] = grid[i][k] ? 0 : 1;
                                    });
                                    setGrid(newGrid);
                                })}
                                style={{
                                    width: 20,
                                    height: 20,
                                    backgroundColor: grid[i][k] ? color : undefined,
                                    border: 'solid 1px black'
                                }}
                            >
                            </div>
                        )
                    })
                })}
            </div>
        </>
    );
}

