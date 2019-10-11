import * as types from '../types';
import appStorage from "../../utils/StoreState";

const state = {...appStorage.get('fileGroups')};

const getters = {
    // [types.FILE_GROUPS]: state => {
    //     return state.fileGroups;
    // },
    // [types.GROUP_FILES]: state => {
    //     return state.fileGroups;
    // },
    // [types.CLICK_COUNTER]: state => {
    //     return state.counter + ' Clicks';
    // }
};

const mutations = {
    [types.MUTATE_FILE_GROUPS]: (state, payload) => {
        // console.log("MUTATE_FILE_GROUPS",state, payload, state.fileGroups);
        state.groups = {
            ...state.groups,
            ...payload
        };
        console.log('state.fileGroups', state.fileGroups)
    },
    [types.MUTATE_DELETE_FILE_GROUPS]: (state, payload) => {
        delete state.groups[payload.id];
        // to update state
        state.groups = {...state.groups};
    },
    [types.MUTATE_FILE_CHECKED]: (state, payload) => {
        const file = state.groups[payload.groupId].files.find((file) => file.id === payload.id)
        file.checked = !file.checked;
    }
};

const actions = {
    [types.ADD_FILE_GROUP]: ({ commit }, payload) => {
        console.log('payload', payload);
        commit(types.MUTATE_FILE_GROUPS, payload);
    },
    [types.DELETE_FILE_GROUP]: ({ commit }, payload) => {
        // console.log('payload', payload);
        commit(types.MUTATE_DELETE_FILE_GROUPS, payload);
    },
    [types.TOGGLE_FILE_CHECKED]: ({ commit }, payload) => {
        console.log('payload id', payload);
        commit(types.MUTATE_FILE_CHECKED, payload);
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
