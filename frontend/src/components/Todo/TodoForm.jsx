import React from 'react'
import Grid from '../../template/Grid/Grid'
import IconButton from '../../template/IconButton/IconButton'

export default function Todo(props) {
    return (
        <div roles='form' className='todoForm row'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control'
                    placeholder='Adicione uma tarefa'
                    onChange={props.handleChange}
                    value={props.description}></input>
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus' 
                onClick={props.handleAdd} />
            </Grid>
        </div>
    )
}