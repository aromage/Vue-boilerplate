const state = {
  test: false,
};

const getters = {
  TEST: (state) => state.test,
};

const mutations = {
  SET_TEST: (state) => {
    state.test = !state.test;
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
