import React from 'react'

function DisplayTopLabel(props) {
    if (props.row_id === 0) {
        if (props.col_id % 3 === 0) {
            return <p style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#ffffff',
                paddingLeft: '12px',
                marginBottom: '0px'
            }}>
                {props.col_id + 1}
            </p>
        } else {
            return <p style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '0px'
            }}>
                {props.col_id + 1}
            </p>
        }
    } else {
        return null
    }
}

export default DisplayTopLabel