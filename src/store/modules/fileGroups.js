import * as types from '../types';
import appStorage from "../../utils/StoreState";

const state = {...appStorage.get('fileGroups')};

const getters = {
};

const mutations = {
    [types.MUTATE_FILE_GROUPS]: (state, payload) => {
        state.groups = {
            ...state.groups,
            ...payload
        };
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
        commit(types.MUTATE_FILE_GROUPS, payload);
    },
    [types.DELETE_FILE_GROUP]: ({ commit }, payload) => {
        commit(types.MUTATE_DELETE_FILE_GROUPS, payload);
    },
    [types.TOGGLE_FILE_CHECKED]: ({ commit }, payload) => {
        commit(types.MUTATE_FILE_CHECKED, payload);
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
