import config from '@/config';
import * as Actions from './actions-types';
import * as Mutations from './mutations-types';

export default {
  setLoadingHandler({ commit, dispatch }) {
    window.addEventListener('load', () => {
      commit(Mutations.APP_LOAD, true);
      dispatch(Actions.SET_APP_NAME);
    });
  },
  async [Actions.SET_APP_NAME]({ commit }) {
    commit(Mutations.APP_NAME, config.app.name);
  },
};
