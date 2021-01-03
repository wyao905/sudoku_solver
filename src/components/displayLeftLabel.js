import React from 'react'

function DisplayLeftLabel(props) {
    if (props.row_id === 0) {
        return <p style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#ffffff',
            paddingTop: '65px',
            margin: '0 0 0 18px'
        }}>
            {props.row_id + 1}
        </p>
    } else if (props.row_id % 3 === 0) {
        return <p style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#ffffff',
            paddingTop: '30px',
            margin: '0 0 0 18px'
        }}>
            {props.row_id + 1}
        </p>
    } else {
        return <p style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#ffffff',
            paddingTop: '18px',
            margin: '0 0 0 18px'
        }}>
            {props.row_id + 1}
        </p>
    }
}

export default DisplayLeftLabel