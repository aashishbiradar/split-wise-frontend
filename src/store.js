import Vue from "vue";
import Vuex from "vuex";
import userApi from './apis/user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      appReady: null, 
      isLoggedIn: false,
      user: null
  },
  getters: {
      appReady: state => state.appReady,
      isLoggedIn: state => state.isLoggedIn,
      user: state => state.user
  },
  mutations: {
      appReady(state, appReady) {
          state.appReady = appReady;
      },
      setUser(state, user) {
        if (user) {
            state.user = user;
            state.isLoggedIn = true;
        } else {
            state.user = null;
            state.isLoggedIn = false;
        }
      }
  },
  actions: {
      appReady({ commit }, appReady) {
        commit('appReady', appReady);
      },
      async authenticate({ commit }) {
        const { user } = await userApi.authenticate();
        if (user) {
            commit('setUser', user)
            return { user };
        }
        localStorage.removeItem('authToken');
        commit('setUser');
      },
      async login({ commit }, creds) {
        const { token, user, error } = await userApi.login(creds);
        if (token) {
          localStorage.setItem('authToken', token);
          commit('setUser', user);
          return { user } ;
        }
        commit('setUser');
        localStorage.removeItem('authToken');
        return { error };
      },
      async logout({ commit }) {
          localStorage.removeItem('authToken');
          commit('setUser');
      }
  }
});
