/** @jsxImportSource @emotion/react */
import GameOfLife from '../images/gameOfLife.png'
import GameOfLife3 from '../images/gameOfLife3.png'
import TicTacToe from '../images/tictactoe.png'
import Wordle from '../images/wordle.png'

import { Link } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: theme.palette.secondary.light,
    },

    flexContainerColumn: {
        marginTop: -10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '25%',
        width: '50%',
    },

    card: {
        height: 300,
        width: 'auto',
        border: `solid 3px ${theme.palette.primary.light}`,
        margin: 10,
        marginBottom: -10
    },

    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))



const Card = ({ title, img, link }) => {
    const classes = useStyles()
    return (
        <div className={classes.cardContainer}>
            <Link to={link}>
                <img className={classes.card} src={img}></img>
            </Link>
            <h3>{title}</h3>
        </div>
    )
}

export default function Home() {
    const classes = useStyles()
    return (
        <div className={classes.background}>
            <div className={classes.flexContainerColumn}>
                <h1>Welcome to Mini Games</h1>
                <Card title={'Game of Life'} img={GameOfLife3} link={'/game_of_life'}></Card>
                <Card title={'Wordle'} img={Wordle} link={'/wordle'}></Card>
                <Card title={'TicTacToe'} img={TicTacToe} link={'/tic_tac_toe'}></Card>
            </div>
        </div>
    )
}