import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    current: "default"
  },
  mutations: {
    setCurrentState(state, value) {
      state.current = value;
    }
  },
  actions: {
    actionCurrentState({ commit }, value): any {
      commit("setCurrentState", value);
    }
  },
  modules: {},
  getters: {
    getCurrentState(state): string {
      const current = state.current;
      return current;
    }
  }
});
