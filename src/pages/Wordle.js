/** @jsxImportSource @emotion/react */
import { makeStyles } from "@material-ui/core/styles";
import WordleBoard from '../components/Wordle/WordleBoard'
import { useState, useEffect } from 'react'

const useStyles = makeStyles((theme) => ({
    flexContainerColumn: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '25%',
        width: '50%',
    },
    flexContainerRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        display: 'inline-block',
        padding: '10px 15px',
        marginBottom: 10,
        marginRight: 5,
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
    background: {
        backgroundColor: '#121214',
        height: '100vh'
    },
}))

export default function Wordle() {

    const classes = useStyles()
    const [open, setOpen] = useState(true)
    const [color, setColor] = useState('#121214')

    useEffect(() => {
        if (!open) {
            setOpen(true)
        }
    }, [open])

    return (
        <div css={{ backgroundColor: color }} className={classes.background}>
            <div className={classes.flexContainerColumn}>
                <h1 css={{ color: 'white' }}>Wordle</h1>
                <div className={classes.flexContainerRow}>
                    <button className={classes.button} onClick={() => setOpen(prev => !prev)}>Reset</button>
                    <input onChange={(e) => setColor(e.target.value)} value={color} type='color'></input>
                </div>
                {open && <WordleBoard color={color} />}
            </div >
        </div>
    )
}