import React from 'react'
import { connect } from 'react-redux'
import { Link, useRouteMatch } from 'react-router-dom'
import {deleteGroup, editGroup} from '../../store/actions/group'
import { deleteStudentFromGroup } from '../../store/actions/students'

function GroupItem({deleteStudents, groupList, item, deleteGroup, onEdit}) {
    const { url } = useRouteMatch();
    function onDeleteGroup() {
        deleteGroup(item)
        deleteStudents(item)
    }
    console.log('groupListItem', groupList)
    return (
        <li>
        {item.title}
        <span onClick={() => onDeleteGroup()}>&#10006;</span>
        <Link to={`${url}/${item.id}`}><span onClick={() => onEdit(item)}>&#9998;</span></Link>
        </li>
    )
}

function mapStateToProps(state) {
    return {
        groupList: state.group.groupList
    }
}

const mapDispatchToProps = {
    deleteGroup: deleteGroup,
    onEdit: editGroup,
    deleteStudents: deleteStudentFromGroup
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupItem)
