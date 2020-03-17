import { combineReducers } from 'redux';
import group from './group'
import students from './students'

export default combineReducers({
    group: group,
    students: students
}) 



