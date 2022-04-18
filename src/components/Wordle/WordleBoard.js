import { useState, useEffect, useRef } from 'react'
import { makeStyles, responsiveFontSizes } from "@material-ui/core/styles";
import WordleKeyboard from './WordleKeyboard'
import produce from "immer";

const useStyles = makeStyles((theme) => ({
    grid: {
        width: 50,
        height: 50,
        position: 'relative'
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    key: {
        height: 30,
        // lineHeight: 30,
        width: 40,
        backgroundColor: 'gray',
        padding: 5,
        margin: 2.5,
        textAlign: 'center',
        fontSize: 12,
        color: 'white',
        position: 'relative',
        borderRadius: 5,
    },
    span: {
        position: 'absolute',
        top: "45%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    boardSpan: {
        position: 'absolute',
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: 'white',
        fontSize: 30
    }
}))

const WORD = 'hello'

export default function WordleBoard() {
    const classes = useStyles()
    const [wordArray, setWordArray] = useState()
    useEffect(() => {
        setWordArray(WORD.split(''))
    }, [])

    const [gridDimensions] = useState({
        width: 5,
        height: 6
    })
    const [color, setColor] = useState('#FFC0CB')

    const createGameBoard = () => {
        const rows = [];
        for (let i = 0; i < gridDimensions.height; i++) {
            rows.push(Array.from(Array(gridDimensions.width), () => 0))
        }
        return rows
    }

    const [grid, setGrid] = useState(() => createGameBoard())
    const [currentRow, setCurrentRow] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [colorMap, setColorMap] = useState()

    const TopRowKeys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
    const MidRowKeys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
    const BotRowKeys = ['z', 'x', 'c', 'v', 'b', 'n', 'm']

    const handleKeyboardClick = (key) => {
        // debugger
        if (currentIndex === 5) return
        const newGrid = produce(grid, gridCopy => {
            gridCopy[currentRow][currentIndex] = key
        });
        setGrid(newGrid);
        setCurrentIndex(prevIndex => prevIndex + 1)
    }

    const calculateColor = (key, index) => {
        if (wordArray.includes(key) && key === wordArray[index]) {
            return 'green'
        } else if (wordArray.includes(key)) {
            return 'yellow'
        } else {
            return color
        }
    }

    const checkWord = (word) => {
        return (
            word.split('').forEach((letter, index) => {
                const color = calculateColor(grid[currentRow][index], index)
                const indexString = `${currentRow}-${index}`
                setColorMap(prev => ({ ...prev, [indexString]: color }))
            })
        )
    }


    const createWord = () => {
        let word = ''
        for (let i = 0; i < 5; i++) {
            word += grid[currentRow][i]
        }
        return word
    }

    const handleEnter = () => {
        const word = createWord()
        //check to see if word is a valid word
        checkWord(word)
        if (WORD === word) {
            //winner
        } else {
            setCurrentRow(prev => prev + 1)
            setCurrentIndex(0)
        }
    }

    const handleBack = () => {
        if (currentIndex === 0) return
        const newGrid = produce(grid, gridCopy => {
            gridCopy[currentRow][currentIndex - 1] = 0
        });
        setGrid(newGrid);
        setCurrentIndex(prevIndex => prevIndex - 1)
    }
    console.log('currentRow', currentRow)
    console.log('currentIndex', currentIndex)
    console.log(grid)
    return (
        <>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${gridDimensions.width}, 50px)`,
                    gridGap: 5,
                    border: `solid 5px ${color}`
                }}
            >
                {grid.map((rows, i) => {
                    return rows.map((col, k) => {
                        return (
                            <div
                                key={`${i}-${k}`}
                                className={classes.grid}
                                style={{
                                    backgroundColor: colorMap && colorMap[`${i}-${k}`] ? colorMap[`${i}-${k}`] : 'black',
                                    border: `solid 1px ${color}`
                                }}
                            >
                                <span className={classes.boardSpan}>{grid[i][k] !== 0 && grid[i][k]}</span>
                            </div>
                        )
                    })
                })}
            </div>
            <br />
            <WordleKeyboard keys={TopRowKeys} handleClick={handleKeyboardClick} />
            <WordleKeyboard keys={MidRowKeys} handleClick={handleKeyboardClick} />
            <div className={classes.flexRow}>
                <div
                    onClick={() => handleEnter()}
                    className={classes.key}
                >
                    <span className={classes.span}>Enter</span>
                </div>
                <WordleKeyboard keys={BotRowKeys} handleClick={handleKeyboardClick} />
                <div
                    onClick={() => handleBack()}
                    className={classes.key}>
                    <span className={classes.span}>Back</span>
                </div>
            </div>

        </>
    )

}