import React, { useState } from 'react'
import { css, jsx } from '@emotion/react'
import GameBoard from './GameBoard'

const selectOptionsArray = Array.from(new Array(5).fill().map((x, index) => (index + 1) * 10))

export default function GameContainer() {
    
    const [createBoard, setCreateBoard] = useState(false);
    const [gridDimensions, setGridDimensions] = useState({
        width: 10,
        height: 10
    });

    const mapSelectOptions = () => {
        return selectOptionsArray.map((option) =>
            <option key={option} >{option}</option>
        )
    }
    return (
        <div>
            <h1>Game Of Life</h1>
            {!createBoard && (
                <>
                    <label>Width</label>
                    <select
                        name='width'
                        id='width'
                        value={gridDimensions.width}
                        onChange={(e) => {
                            setGridDimensions(prev => ({ ...prev, width: parseInt(e.target.value) }))
                            setGridDimensions(prev => ({ ...prev, height: parseInt(e.target.value) }))
                        }}
                    >
                        {mapSelectOptions()}
                    </select>
                    <label>Height</label>
                    <select
                        disabled='true'
                        name='height'
                        id='height'
                        value={gridDimensions.height}
                    >
                        {mapSelectOptions()}
                    </select>
                    <button
                        onClick={() => setCreateBoard(true)}
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
                />
            )}
        </div >
    )
}