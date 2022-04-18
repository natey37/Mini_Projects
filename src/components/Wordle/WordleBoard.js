import { useState, useEffect, useRef } from 'react'
import { makeStyles, responsiveFontSizes } from "@material-ui/core/styles";
import WordleKeyboard from './WordleKeyboard'
import WinningModal from './WinningModal'
import produce from "immer";
import ReactCardFlip from 'react-card-flip';


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

export default function WordleBoard({ color }) {
    const classes = useStyles()
    const [wordArray, setWordArray] = useState()
    useEffect(() => {
        setWordArray(WORD.split(''))
    }, [])

    const [gridDimensions] = useState({
        width: 5,
        height: 6
    })

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
    const [keyboardColorMap, setKeyboardColorMap] = useState()
    const [winner, setWinner] = useState(false)
    const [open, setOpen] = useState(false)
    const [isFlipped, setIsFlipped] = useState({
        0: [false, false, false, false, false],
        1: [false, false, false, false, false],
        2: [false, false, false, false, false],
        3: [false, false, false, false, false],
        4: [false, false, false, false, false],
        5: [false, false, false, false, false],
    })
    const text = winner ? 'You win! Big Winner!' : "You lose! Big Loser!"

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

    const calculateColor = (key, index, wordMap) => {
        console.log(wordMap)
        if (wordArray.includes(key) && key === wordArray[index] && wordMap[key] > 0) {
            wordMap[key]--
            return '#538D4E'
        } else if (wordArray.includes(key) && wordMap[key] > 0) {
            wordMap[key]--
            return '#B59F3B'
        } else {
            return '#3A3A3B'
        }
    }

    const checkWord = (word, wordMap) => {
        return (
            word.split('').forEach((letter, index) => {
                const color = calculateColor(grid[currentRow][index], index, wordMap)
                const indexString = `${currentRow}-${index}`
                setColorMap(prev => ({ ...prev, [indexString]: color }))
                setKeyboardColorMap(prev => ({ ...prev, [letter]: color }))
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

    const createWordMap = () => {
        let map = {}
        wordArray.forEach((letter) => {
            map[letter] ? map[letter] += 1 : map[letter] = 1
        })
        return map
    }

    const handleEnter = () => {
        if (currentIndex !== 5) return
        if (open) return
        const word = createWord()
        const wordMap = createWordMap()
        console.log(wordMap)
        //check to see if word is a valid word
        checkWord(word, wordMap)
        if (WORD === word) {
            //winner
            setIsFlipped(prev => ({ ...prev, [currentRow]: [true, false, false, false, false] }))
            setTimeout(() => {
                setIsFlipped(prev => ({ ...prev, [currentRow]: [true, true, false, false, false] }))
            }, 300)
            setTimeout(() => {
                setIsFlipped(prev => ({ ...prev, [currentRow]: [true, true, true, false, false] }))
            }, 600)
            setTimeout(() => {
                setIsFlipped(prev => ({ ...prev, [currentRow]: [true, true, true, true, false] }))
            }, 900)
            setTimeout(() => {
                setIsFlipped(prev => ({ ...prev, [currentRow]: [true, true, true, true, true] }))
            }, 1200)
            setTimeout(() => {
                setWinner(true)
                setOpen(true)
            }, 1500)
        } else {

            setIsFlipped(prev => ({ ...prev, [currentRow]: [true, false, false, false, false] }))
            setTimeout(() => {
                setIsFlipped(prev => ({ ...prev, [currentRow]: [true, true, false, false, false] }))
            }, 300)
            setTimeout(() => {
                setIsFlipped(prev => ({ ...prev, [currentRow]: [true, true, true, false, false] }))
            }, 600)
            setTimeout(() => {
                setIsFlipped(prev => ({ ...prev, [currentRow]: [true, true, true, true, false] }))
            }, 900)
            setTimeout(() => {
                setIsFlipped(prev => ({ ...prev, [currentRow]: [true, true, true, true, true] }))
            }, 1200)
            setTimeout(() => {
                if (currentRow === 5) {
                    setWinner(false)
                    setOpen(true)
                } else {
                    setCurrentRow(prev => prev + 1)
                    setCurrentIndex(0)
                }
            }, 1500)
            // console.log(currentRow)

            // setIsFlipped(false)
        }
    }

    const handleBack = () => {
        if (winner) return
        if (currentRow === 5 && currentIndex === 5) return
        if (currentIndex === 0) return
        const newGrid = produce(grid, gridCopy => {
            gridCopy[currentRow][currentIndex - 1] = 0
        });
        setGrid(newGrid);
        setCurrentIndex(prevIndex => prevIndex - 1)
    }
    // console.log('currentRow', currentRow)
    // console.log('currentIndex', currentIndex)
    // console.log(grid)
    // console.log(open)
    return (
        <>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${gridDimensions.width}, 50px)`,
                    gridGap: 5,
                    // border: `solid 5px ${color}`
                }}
            >
                {grid.map((rows, i) => {
                    return rows.map((col, k) => {
                        return (
                            <ReactCardFlip isFlipped={isFlipped[i][k]} flipDirection="vertical">
                                <div
                                    key={`${i}-${k}`}
                                    className={classes.grid}
                                    style={{
                                        backgroundColor: 'black',
                                        // border: `solid 1px ${color}`
                                        border: 'solid 1px #3A3A3B'
                                    }}
                                >
                                    <span className={classes.boardSpan}>{grid[i][k] !== 0 && grid[i][k]}</span>
                                </div>

                                <div
                                    key={`${i}-${k}`}
                                    className={classes.grid}
                                    style={{
                                        backgroundColor: colorMap && colorMap[`${i}-${k}`] ? colorMap[`${i}-${k}`] : 'black',
                                        // border: `solid 1px ${color}`
                                        border: 'solid 1px #3A3A3B'

                                    }}
                                >
                                    <span className={classes.boardSpan}>{grid[i][k] !== 0 && grid[i][k]}</span>
                                </div>
                            </ReactCardFlip>
                        )
                    })
                })}
            </div>
            <br />
            <WordleKeyboard keyboardColorMap={keyboardColorMap} keys={TopRowKeys} handleClick={handleKeyboardClick} />
            <WordleKeyboard keyboardColorMap={keyboardColorMap} keys={MidRowKeys} handleClick={handleKeyboardClick} />
            <div className={classes.flexRow}>
                <div
                    onClick={() => handleEnter()}
                    className={classes.key}
                >
                    <span className={classes.span}>Enter</span>
                </div>
                <WordleKeyboard keyboardColorMap={keyboardColorMap} keys={BotRowKeys} handleClick={handleKeyboardClick} />
                <div
                    onClick={() => handleBack()}
                    className={classes.key}>
                    <span className={classes.span}>Back</span>
                </div>
            </div>
            {open &&
                <WinningModal close={setOpen} text={text} />
            }
        </>
    )

}