import React from 'react'
import DisplaySingle from './displaySingle'
import DisplayLeftLabel from './displayLeftLabel'

function DisplayRows(props) {
    return props.board.map((row, row_id) => {
        return <div style={{ display: 'flex' }}>
            <DisplayLeftLabel row_id={row_id} />
            <div style={{
                display: 'flex'
            }}
                key={row_id}>
                <DisplaySingle board={props.board}
                    row={row}
                    row_id={row_id}
                    setBoard={props.setBoard}
                    editMode={props.editMode}
                    setEditMode={props.setEditMode}
                    single={props.single}
                    setSingle={props.setSingle}
                    setStatusMessage={props.setStatusMessage} />
            </div>
        </div>
    })
}

export default DisplayRows