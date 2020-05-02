/* eslint-disable */
import * as Mutations from './mutations-types';
import actions from './actions';

const state = {
  appLoaded: false,
  appName: null,
};

const mutations = {
  [Mutations.APP_LOAD](state, payload) {
    state.appLoaded = payload;
  },
  [Mutations.APP_NAME](state, payload) {
    state.appName = payload;
  },
};

const getters = {
  appLoaded: state => state.appLoaded,
  appName: state => state.appName,
};

export default {
  mutations,
  getters,
  actions,
  state,
};
