/** @jsxImportSource @emotion/react */
import { makeStyles } from "@material-ui/core/styles";
import WordleBoard from '../components/Wordle/WordleBoard'

const useStyles = makeStyles((theme) => ({
    flexContainerColumn: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '25%',
        width: '50%',
        backgroundColor: 'red'
        // minWidth: 600
    },
}))

export default function Wordle() {
    const classes = useStyles()
    return (
        <div className={classes.flexContainerColumn}>
            <h1>Wordle</h1>
            <WordleBoard></WordleBoard>
        </div>
    )
}