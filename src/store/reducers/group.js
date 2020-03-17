import {DELETE_GROUP_ACTION, EDIT_GROUP_ACTION, SAVE_GROUP_ACTION} from '../actions/group'

const initialState = {
    groupList: [{
        id: 1,
        title: 'Front-end Basic'
    },
    {
        id: 2,
        title: 'Front-end Pro'
    },
    {
        id: 3,
        title: 'React'
    },
    {
        id: 4,
        title: 'Angular'
    }]
};

function updateGroup(groupList, group) {
    return groupList.map(item => item.id === group.id ? group : item)
}

function createGroup(groupList, group) {
    group.id = Date.now()
    return [...groupList, group]
}
export default function(state = initialState, { type, payload }) {
    switch(type) {
        case DELETE_GROUP_ACTION:
        console.log('groupList', state.groupList)
            return {
                ...state,
                groupList: state.groupList.filter(item => item.id !== payload.id)
            }
        case SAVE_GROUP_ACTION:
            return {
                ...state, 
                groupList: payload.id
                    ? updateGroup(state.groupList, payload)
                    : createGroup(state.groupList, payload)
            }

        default: 
            return state;
    }
}