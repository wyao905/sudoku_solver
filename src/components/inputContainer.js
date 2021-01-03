import React, { useState } from 'react'
import Display from './display'
import ToolBar from './toolBar'

function InputContainer() {
    const [board, setBoard] = useState([...Array(9)].map(r => Array(9).fill(0)))
    const [editMode, setEditMode] = useState(false)
    const [single, setSingle] = useState(false)
    const [statusMessage, setStatusMessage] = useState('')

    return <div style={{
        display: 'flex',
        padding: '48px',
        margin: '24px',
        borderRadius: '12px',
        backgroundColor: '#3474b1',
        width: '1000px'
    }}>
        <Display board={board}
            setBoard={setBoard}
            editMode={editMode}
            setEditMode={setEditMode}
            single={single}
            setSingle={setSingle}
            setStatusMessage={setStatusMessage} />
        <ToolBar board={board}
            setBoard={setBoard}
            editMode={editMode}
            setEditMode={setEditMode}
            single={single}
            setSingle={setSingle}
            statusMessage={statusMessage}
            setStatusMessage={setStatusMessage} />
    </div>
}

export default InputContainer