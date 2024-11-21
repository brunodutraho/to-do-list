import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
        <div role='form' className='todoForm d-flex flex-column mb-3'>
        <Grid cols='12 9 10' classGrid=''>
            <input type="text" id='description' placeholder='Adicione uma tarefa'
            value={props.description}
            onChange={props.handleChange}
            className="form-control" />
        </Grid>
        <Grid cols='12 3 2' classGrid=' btn-respo'>
            <IconButton icon='plus' style='primary' onClick={props.handleAdd}  />
            <IconButton icon='search' style='info' onClick={props.handleSearch}  />
            <IconButton icon='close' style='danger' onClick={props.handleClear}  />
        </Grid>
    </div>
)