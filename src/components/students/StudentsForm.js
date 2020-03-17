import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { saveStudent } from '../../store/actions/students'

function StudentsForm({ studentsList, item, onSave, groupList }) {
    const history = useHistory()
    console.log(item, 'item')
    const [name, setName] = useState(item.name)
    const [select, setSelect] = useState(groupList[0].id)

    function onSaveStudent() {
        onSave({
            id: item.id,
            name: name,
            groupId: select
        })
        history.goBack();
    }
    return ( 
        <div className='student-form'>
            <h3>Edit Student</h3>
            <input className='input' type="text" value={name} onChange={({target}) => setName(target.value)}  />
            <select onChange={({target}) => setSelect(target.value)}>
                {groupList.map((item) => (
                    <option key={item.id} value={item.id}>{item.title}</option>
                ))}
            </select>
            <button onClick={() => history.goBack()} className='button'>Cancel</button>
            <button onClick={() => onSaveStudent()} className='button'>Save</button>
        </div>
    )
}

function mapStateToProps(state, {id}) {
    return {
        studentsList: state.students.studentsList,
        item: id !== 'new'
            ? state.students.studentsList.find(item => item.id == id)
            : {id: '', name: ''},
        groupList: state.group.groupList
    }
}

const mapDispatchToProps = {
    onSave: saveStudent
}


export default connect(mapStateToProps, mapDispatchToProps)(StudentsForm)
