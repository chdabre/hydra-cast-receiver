import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    model: 'solid(0.1,0.1,0.1).out()',
  },
  mutations: {
    setModel(state, model) {
      state.model = model;
    },
  },
  actions: {
  },
  modules: {
  },
});
