import React from 'react'

function Instructions(props) {
    return <p style={{
        marginLeft: '12px',
        textAlign: 'left',
        color: '#ffffff'
    }}>
        Clear Board: Wipes the board clean.<br /><br />
        Edit Board: Edit and add numbers to the board.<br /><br />
        Solve Cell: Select a space to reveal a solution that fits in that space.<br /><br />
        Solve: Reveals the entire board.
    </p>
}

export default Instructions