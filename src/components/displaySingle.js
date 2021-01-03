import React from 'react'
import DisplayTopLabel from './displayTopLabel'

function DisplaySingle(props) {
    const updateBoard = (e) => {
        let col_id = parseInt(e.target.id.split('-')[1])
        let row_id = parseInt(props.row_id)
        let updatedRow = [...props.board[row_id].slice(0, col_id), e.target.value === '' ? 0 : parseInt(e.target.value), ...props.board[row_id].slice(col_id + 1)]
        props.setBoard([...props.board.slice(0, row_id), updatedRow, ...props.board.slice(row_id + 1)])
    }

    const checkInput = (e) => {
        if (e.target.value.length > e.target.maxLength) {
            e.target.value = e.target.value.slice(0, e.target.maxLength)
        }
    }

    const handleHover = (e) => {
        if (props.editMode) {
            e.target.style.filter = 'brightness(75%)'
        }
    }

    const handleMouseLeave = (e) => {
        e.target.style.filter = 'brightness(100%)'
    }

    const handleClick = (e) => {
        if (props.single) {
            props.setSingle(false)
            let configObj = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    row_id: parseInt(e.target.id[0]),
                    col_id: parseInt(e.target.id[2]),
                    single: true,
                    board: props.board
                })
            }

            fetch('http://localhost:5000', configObj)
                .then(response => { return response.json() })
                .then(data => {
                    if (!data.error) {
                        let col_id = parseInt(e.target.id[2])
                        let row_id = parseInt(e.target.id[0])
                        let updatedRow = [...props.board[row_id].slice(0, col_id), parseInt(data.solution), ...props.board[row_id].slice(col_id + 1)]
                        props.setBoard([...props.board.slice(0, row_id), updatedRow, ...props.board.slice(row_id + 1)])
                    } else {
                        props.setStatusMessage(data.error)
                    }
                })
        }
    }

    return props.row.map((space, col_id) => {
        return <div>
            <DisplayTopLabel row_id={props.row_id}
                col_id={col_id} />
            <input type='number'
                style={{
                    marginTop: `${props.row_id % 3 === 0 ? '12px' : '0px'}`,
                    marginLeft: `${(col_id % 3 === 0) ? '12px' : '0px'}`,
                    padding: '3px',
                    borderTop: `solid #3474b1 ${props.row_id % 3 === 0 ? '0px' : '1px'}`,
                    borderBottom: `solid #3474b1 ${(parseInt(props.row_id) + 1) % 3 === 0 ? '0px' : '1px'}`,
                    borderLeft: `solid #3474b1 ${col_id % 3 === 0 ? '0px' : '1px'}`,
                    borderRight: `solid #3474b1 ${(parseInt(col_id) + 1) % 3 === 0 ? '0px' : '1px'}`,
                    outline: 'none',
                    height: '48px',
                    width: '48px',
                    fontSize: '36px',
                    textAlign: 'center'
                }}
                key={`${props.row_id}-${col_id}`}
                id={`${props.row_id}-${col_id}`}
                min='1'
                max='9'
                maxLength='1'
                value={space === 0 ? '' : space}
                disabled={!props.editMode}
                onChange={updateBoard}
                onKeyDown={e => (e.key === 'e' || e.key === '.') && e.preventDefault()}
                onInput={checkInput}
                onMouseOver={handleHover}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick} />
        </div>
    })
}

export default DisplaySingle