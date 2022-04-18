import { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    key: {
        height: 30,
        // lineHeight: 30,
        width: 20,
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
    }

}))

export default function WordleKeyboard({ keys, handleClick }) {
    const classes = useStyles()

    return (
        <div className={classes.flexRow}>
            {keys.map((key, index) => {
                return (
                    <div 
                        key={key} 
                        className={classes.key} 
                        onClick={() => handleClick(key)}
                    >
                        <span className={classes.span}>{key}</span>
                    </div>
                )
            })}
        </div>
    )

}