/** @jsxImportSource @emotion/react */
import GameOfLife from '../images/gameOfLife.png'
import { Link } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    flexContainerColumn: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '25%',
        width: '50%',
        // minWidth: 600
    },

    container: {
        height: '100%',
        width: '75%',
        marginLeft: '12.5%',
        backgroundColor: theme.palette.secondary.light,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    card: {
        height: 300,
        border: `solid 3px ${theme.palette.primary.light}`,
        marginRight: 20,
    },

    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))



const Card = ({ title, img }) => {
    const classes = useStyles()
    return (
        <div className={classes.cardContainer}>
            <Link to={'/game_of_life'}>
                <img className={classes.card} src={img}></img>
            </Link>
            <h3>Game of Life</h3>

        </div>
    )
}

export default function Home() {
    const classes = useStyles()
    return (
        <div>
            <h1 className={classes.flexContainerColumn}>Welcome to Mini Games</h1>
            <div className={classes.container}>
                <Card title={'Game of Life'} img={GameOfLife}></Card>
            </div>
        </div>
    )
}