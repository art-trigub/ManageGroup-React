import React from 'react'
import { connect } from 'react-redux'
import StudentsItem from './StudentsItem';

function StudentsTable({ list }) {
    return (
        <div className="student-table">
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Group</th>
                    </tr>
                    {list.map(item => <StudentsItem key={item.id} item={item} />)}
                </tbody>
            </table>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        list: state.students.studentsList
    }
}

export default connect(mapStateToProps)(StudentsTable)
