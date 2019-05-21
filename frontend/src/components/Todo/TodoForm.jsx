import React from 'react'
import Grid from '../../template/Grid/Grid'
import IconButton from '../../template/IconButton/IconButton'

export default function Todo(props) {

    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }
    return (
        <div roles='form' className='todoForm row'>
            <Grid cols='8 9 9 10'>
                <input id='description' className='form-control'
                    placeholder='Adicione uma tarefa'
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    value={props.description}></input>
            </Grid>
            <Grid cols='4 3 3 2' styleGrid=' grid-buttons'>
                <IconButton style='primary' icon='plus'
                    onClick={props.handleAdd} />
                <IconButton style='info' icon='search'
                    onClick={props.handleSearch} />
                <IconButton style={'default'} icon='times'
                    onClick={props.handleClear} />
            </Grid>
        </div >
    )
}