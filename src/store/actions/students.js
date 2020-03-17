export const SAVE_STUDENT_ACTION = 'SAVE_STUDENT_ACTION';
export function saveStudent(payload) {
    return {
        type: SAVE_STUDENT_ACTION,
        payload: payload
    }
}

export const DELETE_STUDENT_ACTION = 'DELETE_STUDENT_ACTION';
export function deleteStudent(payload) {
    return {
        type: DELETE_STUDENT_ACTION,
        payload: payload
    }
}

export const DELETE_STUDENT_FROM_GROUP_ACTION = 'DELETE_STUDENT_FROM_GROUP_ACTION';
export function deleteStudentFromGroup(payload) {
    return {
        type: DELETE_STUDENT_FROM_GROUP_ACTION,
        payload: payload
    }
}


