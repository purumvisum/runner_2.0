import * as types from '../types';

const state = {
    groups: {
        'english' : {
            files: [
                {
                    title: "test1",
                    checked: true
                }, {
                    title:"test2",
                    checked: false
                },
                {
                    title:"test3",
                    checked: false
                }
            ]
        },'dutch' : {
            files: [
                {
                    title: "test1",
                    checked: false
                }, {
                    title:"test2",
                    checked: true
                },
                {
                    title:"test2",
                    checked: false
                }
            ]
        }
    }
};

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
    // [types.MUTATE_DECREMENT_COUNTER]: (state, payload) => {
    //     state.counter -= payload;
    // }
};

const actions = {
    [types.ADD_FILE_GROUP]: ({ commit }, payload) => {
        console.log('payload', payload);
        commit(types.MUTATE_FILE_GROUPS, payload);
    },
    // [types.COUNTER_DECREMENT]: ({ commit }, payload) => {
    //     commit(types.MUTATE_DECREMENT_COUNTER, payload);
    // },
    // [types.COUNTER_INCREMENT_ASYNC]: ({commit}, payload) => {
    //     setTimeout(() => {
    //         commit(types.MUTATE_INCREMENT_COUNTER, payload.by);
    //     }, payload.duration);
    // },
    // [types.COUNTER_DECREMENT_ASYNC]: ({commit}, payload) => {
    //     setTimeout(() => {
    //         commit(types.MUTATE_DECREMENT_COUNTER, payload.by);
    //     }, payload.duration);
    // }
};

export default {
    state,
    mutations,
    actions,
    getters
}
