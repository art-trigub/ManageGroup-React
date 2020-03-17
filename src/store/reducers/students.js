import { SAVE_STUDENT_ACTION , DELETE_STUDENT_ACTION, DELETE_STUDENT_FROM_GROUP_ACTION } from '../actions/students'
const initialState = {
    studentsList: [
        
    ]
}

function updateStudent(studentsList, payload) {
    return studentsList.map(item => item.id === payload.id ? payload : item)
}

function createStudent(studentsList, payload) {
    console.log('payload', payload)
    payload.id = Date.now();
    return [...studentsList, payload]
}

export default function(state = initialState, {type, payload}) {
    console.log('payload', payload)
    switch(type) {
        case SAVE_STUDENT_ACTION:
            return {
                ...state,
                studentsList: payload.id   
                    ? updateStudent(state.studentsList, payload)
                    : createStudent(state.studentsList, payload)
            }
        case DELETE_STUDENT_ACTION:
            return {
                ...state,
                studentsList: state.studentsList.filter( item => item.id !== payload.id)
            }
        case DELETE_STUDENT_FROM_GROUP_ACTION:
        console.log('studentsList', state.studentsList)
            return {
                ...state,
                studentsList: state.studentsList.filter( item => +item.groupId !== payload.id)
            }
        default: 
            return state
    }

}