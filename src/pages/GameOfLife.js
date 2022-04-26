import GameContainer from "../components/GameOfLife/GameContainer";
/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'relative',
        height: '100%',
        width: '100%'
    },
    flexContainerColumn: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '25%',
        width: '50%',
        [theme.breakpoints.down('md')]: {
            // backgroundColor: 'red',
            width: '100%',
            marginLeft: '0%',
        },
        // minWidth: 600
    },
    info: {
        // position: 'absolute',
        // left: 100,
        // top: 100,
        marginTop: 10,
        padding: 10,
        height: 500,
        width: '100%',
        overflow: 'scroll',
        [theme.breakpoints.down('md')]: {
            width: '90%',
            marginLeft: '0%',
        },
    },

    li: {
        fontStyle: 'italic'
    },

    h3: {
        textDecoration: 'underline'
    }
}))

export default function GameOfLife() {
    const classes = useStyles()
    const [hideRules, setHideRules] = useState(false)

    return (
        <div className={classes.flexContainerColumn}>
            <h1>Game Of Life</h1>
            <GameContainer setHideRules={setHideRules}></GameContainer>
            {!hideRules &&
                <>
                    <div className={classes.info}>
                        <h3 className={classes.h3}><a href='https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life'>Rules</a></h3>
                        <p>The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent.</p>
                        <p>At each step in time, the following transitions occur:</p>
                        <ol>
                            <li className={classes.li}>
                                Any live cell with fewer than two live neighbours dies, as if by underpopulation.
                            </li>
                            <li className={classes.li}>
                                Any live cell with two or three live neighbours lives on to the next generation.
                            </li>
                            <li className={classes.li}>
                                Any live cell with more than three live neighbours dies, as if by overpopulation.
                            </li>
                            <li className={classes.li}>
                                Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
                            </li>
                        </ol>
                        <p>These rules, which compare the behavior of the automaton to real life, can be condensed into the following:</p>
                        <ol>
                            <li className={classes.li}>
                                Any live cell with two or three live neighbours survives.
                            </li>
                            <li className={classes.li}>
                                Any dead cell with three live neighbours becomes a live cell.
                            </li>
                            <li className={classes.li}>
                                All other live cells die in the next generation. Similarly, all other dead cells stay dead.
                            </li>
                        </ol>
                        <p>
                            The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed, live or dead; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick. Each generation is a pure function of the preceding one. The rules continue to be applied repeatedly to create further generations.
                        </p>
                    </div>
                </>
            }

        </div>

    )
}