import { makeStyles } from "@material-ui/core/styles";
/** @jsxImportSource @emotion/react */
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen'

const useStyles = makeStyles((theme) => ({
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    key: {
        height: 48,
        width: 33,
        backgroundColor: '#818384',
        padding: 5,
        margin: 3.5,
        textAlign: 'center',
        fontSize: 14,
        color: 'white',
        position: 'relative',
        borderRadius: 4,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    span: {
        position: 'absolute',
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    }

}))

export default function WordleKeyboard({ keys, handleClick, keyboardColorMap }) {
    const classes = useStyles()
    const isMobile = useCheckMobileScreen()

    return (
        <div className={classes.flexRow}>
            {keys.map((key, index) => {
                return (
                    <div
                        key={key}
                        className={classes.key}
                        onClick={() => handleClick(key)}
                        css={{ backgroundColor: keyboardColorMap && keyboardColorMap[key] ? keyboardColorMap[key] : '#818384', height: isMobile ? 45 : 48, width: isMobile ? 25 : 33, margin: isMobile ? 2.5 : 3.5}}
                    >
                        <span className={classes.span}>{key}</span>
                    </div>
                )
            })}
        </div>
    )

}