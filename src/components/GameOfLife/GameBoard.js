import React, { useState, useCallback, useRef } from 'react'
import produce from "immer";

const operations = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]]

export default function GameContainer({ width, height, setCreateBoard }) {

    const [gridDimensions] = useState({
        width: width,
        height: height
    })

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
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <button
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
                    disabled={running}
                    onClick={() => setGrid(createGameBoard)}
                >
                    Clear
                </button>
                <button
                    disabled={running}
                    onClick={() => handleRandom()}
                >
                    Random
                </button>
                Set Interval
                <input
                    disabled={running}
                    value={interval}
                    onChange={(e) => setInterval(parseInt(e.target.value) || '')}
                />
                m/s
                <button
                    disabled={running}
                    onClick={() => setCreateBoard(false)}
                >
                    Create New Game Board
                </button>
            </div>


            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${gridDimensions.width}, 20px)`
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
                                    backgroundColor: grid[i][k] ? 'pink' : undefined,
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

