import React, { useState } from 'react'
import { css, jsx } from '@emotion/react'

const selectOptionsArray = Array.from(new Array(50).fill().map((x, index) => index))

export default function GameContainer() {

    const [gridDimensions, setGridDimensions] = useState({
        width: 10,
        height: 10
    });

    const mapSelectOptions = () => {
        return selectOptionsArray.map((option) =>
            <option key={option} >{option + 1}</option>
        )
    }
    return (
        <div>
            <h1>Game Of Life</h1>
            <label>Width</label>
            <select
                name='width'
                id='width'
                value={gridDimensions.width}
                onChange={(e) => setGridDimensions(prev => ({ ...prev, width: e.target.value }))}
            >
                {mapSelectOptions()}
            </select>
            <label>Height</label>
            <select
                name='height'
                id='height'
                value={gridDimensions.height}
                onChange={(e) => setGridDimensions(prev => ({ ...prev, height: e.target.value }))}
            >
                {mapSelectOptions()}
            </select>
            <button
                onClick={() => { }}
            >
                Create Game Board!
            </button>
        </div>
    )
}