import Vue from "vue";
import Vuex from "vuex";

import characters from "./characters.module";
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    characters
  }
});
