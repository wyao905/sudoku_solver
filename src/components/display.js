import React from 'react'
import DisplayRows from './displayRows'

function Display(props) {
    return <div>
        <DisplayRows board={props.board}
            setBoard={props.setBoard}
            editMode={props.editMode}
            setEditMode={props.setEditMode}
            single={props.single}
            setSingle={props.setSingle}
            setStatusMessage={props.setStatusMessage} />
    </div>
}

export default Display