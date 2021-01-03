import React from 'react'

function StatusMessage(props) {
    if (props.statusMessage === '') {
        return null
    } else if (props.statusMessage === 'Puzzle Solved!') {
        return <p style={{
            backgroundColor: '#1cccaf',
            borderRadius: '5px',
            color: '#ffffff',
            marginLeft: '12px',
            padding: '12px 0',
            fontSize: '14px',
            fontWeight: 'bold',
            textAlign: 'center'
        }}>{props.statusMessage}</p>
    } else {
        return <p style={{
            backgroundColor: '#940808',
            borderRadius: '5px',
            color: '#ffffff',
            marginLeft: '12px',
            padding: '12px 0',
            fontSize: '14px',
            fontWeight: 'bold',
            textAlign: 'center'
        }}>{props.statusMessage}</p>
    }
}

export default StatusMessage