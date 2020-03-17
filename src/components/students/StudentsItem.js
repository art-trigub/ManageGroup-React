import React from 'react'
import { connect } from 'react-redux'
import { saveStudent, deleteStudent } from '../../store/actions/students'
import {Link, useRouteMatch} from 'react-router-dom'

function StudentsItem({ item, groupList, studentsList, onSave, onDelete }) {
    const {path} = useRouteMatch();
    function onEditStudent() {
        onSave(item)   
    }

    function onDeleteStudent() {
        onDelete(item);
    }
    console.log('studentsList', studentsList)

    return (
        <tr>
            <td>
            {item.name}
            </td>
            <td>
                {(groupList.find(group => group.id === +item.groupId )).title}
            </td>
            <Link to={`${path}${item.id}`}>
                <span onClick={onEditStudent} className="student__edit__icon">&#9998;</span>
            </Link>
            <span  onClick={onDeleteStudent}className="student__edit__icon">&#10006;</span>
        </tr>
    )
}

function mapStateToProps(state) {
    return {
        groupList: state.group.groupList,
        studentsList: state.students.studentsList
    }
}

const mapDispatchToProps = {
    onSave: saveStudent,
    onDelete: deleteStudent
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentsItem)
