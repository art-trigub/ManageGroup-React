import React from 'react'
import { connect } from 'react-redux'
import GroupItem from './GroupItem';

function GroupList({ groupList }) {
    return (
        <div className="group-list">
            <ul>
                {groupList.map(item => (
                    <GroupItem key={item.id} item={item} />
                ))}
            </ul>
        </div>
    )
}

function mapStateToProps({ group }) {
    return {
        groupList: group.groupList
    }
}

export default connect(mapStateToProps)(GroupList)
