import React from 'react'
import StatusMessage from './statusMessage'
import Instructions from './instructions'

function ToolBar(props) {
    const handleClear = () => {
        props.setBoard([...Array(9)].map(r => Array(9).fill(0)))
        props.setStatusMessage('')
    }

    const handleEdit = () => {
        props.setEditMode(true)
    }

    const handleSingleSubmit = () => {
        props.setSingle(true)
    }

    const handleSubmit = () => {
        props.setEditMode(false)
        let configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ single: false, board: props.board })
        }

        fetch('http://localhost:5000', configObj)
            .then(response => { return response.json() })
            .then(data => {
                if (!data.error) {
                    props.setBoard([...data.solution])
                    props.setStatusMessage('Puzzle Solved!')
                } else {
                    props.setStatusMessage(data.error)
                }
            })
    }

    return <div style={{
        border: 'solid #8cc7ff 2px',
        margin: '54px 48px 0',
        paddingTop: '12px',
        paddingRight: '12px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    }}>
        <h3 style={{
            position: 'relative',
            top: '-28px',
            backgroundColor: '#3474b1',
            textAlign: 'left',
            margin: '0 0 0 12px',
            paddingLeft: '6px',
            width: '135px',
            color: '#ffffff'
        }}>Sudoku Solver</h3>
        <div>
            <div style={{ display: 'flex' }}>
                <button onClick={handleClear}
                    disabled={props.single}
                    style={buttonStyle}>Clear Board</button>
                <button onClick={handleEdit}
                    disabled={props.single}
                    style={buttonStyle}>Edit Board</button>
            </div>
            <div style={{ display: 'flex' }}>
                <button onClick={handleSingleSubmit}
                    disabled={props.single || !props.editMode}
                    style={buttonStyle}>Solve Cell</button>
                <button onClick={handleSubmit}
                    disabled={props.single || !props.editMode}
                    style={buttonStyle}>Solve</button>
            </div>
        </div>
        <StatusMessage statusMessage={props.statusMessage} />
        <div style={{ flexGrow: '1' }} />
        <Instructions />
    </div>
}

const buttonStyle = {
    border: 'none',
    borderRadius: '5px',
    margin: '0 0 12px 12px',
    fontSize: '14px',
    height: '30px',
    width: '50%',
    outline: 'none'
}

export default ToolBar