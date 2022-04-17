import React, { useState, useEffect } from 'react'
import { css, jsx } from '@emotion/react'
import GameBoard from './GameBoard'
import { makeStyles } from "@material-ui/core/styles";
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen'

const useStyles = makeStyles((theme) => ({
    button: {
        display: 'inline-block',
        padding: '10px 15px',
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
    areaInput: {
        border: `solid 2px ${theme.palette.info.main}`,
        marginRight: 10,
        padding: '10px 15px',
        fontSize: '16px',

    }
}))

const selectOptionsArray = Array.from(new Array(5).fill().map((x, index) => ((index + 1) * 10) * ((index + 1) * 10)))

const areaMap = {
    100: {
        width: 10,
        height: 10
    },
    400: {
        width: 20,
        height: 20
    },
    900: {
        width: 30,
        height: 30
    },
    1600: {
        width: 40,
        height: 40
    },
    2500: {
        width: 50,
        height: 50
    }
}

export default function GameContainer({ setHideRules }) {
    const classes = useStyles()
    const isMobile = useCheckMobileScreen()

    const [createBoard, setCreateBoard] = useState(false);
    const [gridDimensions, setGridDimensions] = useState({
        width: isMobile ? 20 : 10,
        height: isMobile ? 20 : 10
    });
    const [gridArea, setGridArea] = useState(isMobile ? 400 : 100)
    const handleGridAreaSelect = (e) => {
        console.log(e.target.value)
        setGridDimensions({
            width: areaMap[e.target.value].width,
            height: areaMap[e.target.value].height

        })
        setGridArea(e.target.value)
    }
    console.log(gridArea)
    const mapSelectOptions = () => {
        return selectOptionsArray.map((option, index) =>
            <option key={index} >{option}</option>
        )
    }
    return (
        <div>
            {!createBoard && (
                <>
                    <label>Area: </label>
                    <select
                        disabled={isMobile}
                        className={classes.areaInput}
                        name='area'
                        id='area'
                        value={gridArea}
                        onChange={(e) => handleGridAreaSelect(e)}
                    >
                        {mapSelectOptions()}
                    </select>
                    <button
                        className={classes.button}
                        onClick={() => {
                            setCreateBoard(true)
                            setHideRules(true)
                        }}
                    >
                        Create Game Board!
                    </button>
                </>
            )}
            {createBoard && (
                <GameBoard
                    width={gridDimensions.width}
                    height={gridDimensions.height}
                    setCreateBoard={setCreateBoard}
                    setHideRules={setHideRules}
                />
            )}
        </div >
    )
}