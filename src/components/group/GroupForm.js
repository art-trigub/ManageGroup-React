import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { saveGroup } from '../../store/actions/group'

function GroupForm({ groupList, item, onSave }) {
    const history = useHistory()
    const [name, setName] = useState(item.title)
    console.log(item, name)

    function onSaveGroup() {
        onSave({
            id: item.id,
            title: name
        })
        history.goBack();
    }
    return ( 
        <div className='group-form'>
            <h3>Edit Group</h3>
            <input className='input' type="text" value={name} onChange={({target}) => setName(target.value)}  />
            <button onClick={() => history.goBack()} className='button'>Cancel</button>
            <button onClick={() => onSaveGroup()} className='button'>Save</button>
        </div>
    )
}

function mapStateToProps(state, {id}) {
    return {
        groupList: state.group.groupList,
        item: id !== 'new'
            ? state.group.groupList.find(item => item.id == id)
            : {id: '', title: ''}
    }
}

const mapDispatchToProps = {
    onSave: saveGroup
}


export default connect(mapStateToProps, mapDispatchToProps)(GroupForm)
