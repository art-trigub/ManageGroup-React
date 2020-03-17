export const DELETE_GROUP_ACTION = 'DELETE_GROUP_ACTION';
export function deleteGroup(item) {
    return {
        type: DELETE_GROUP_ACTION,
        payload: item
    }
}

export const EDIT_GROUP_ACTION = 'EDIT_GROUP_ACTION';
export function editGroup(item) {
    return {
        type: EDIT_GROUP_ACTION,
        payload: item
    }
}

export const SAVE_GROUP_ACTION = 'SAVE_GROUP_ACTION';
export function saveGroup(item) {
    return {
        type: SAVE_GROUP_ACTION,
        payload: item
    }
}


