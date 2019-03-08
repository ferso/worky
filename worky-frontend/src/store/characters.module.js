import { GetRequest } from "@/api";

export const GET_CHAR_DATA            = 'GET_CHAR_DATA'
export const FETCH_START              = 'FETCH_START'
export const FETCH_END                = 'FETCH_END'
export const FETCH_CHAR_END           = 'FETCH_CHAR_END'
export const FETCH_CHAR_ERROR         = 'FETCH_CHAR_ERROR'
export const FETCH_CHARACTERS_ERROR   = 'FETCH_CHARACTERS_ERROR'
export const RESET_CHARS_DATA         = 'RESET_CHARS_DATA'
export const GET_ALL_CHARACTERS       = "GET_ALL_CHARACTERS";

const apiBase = 'http://localhost:1337'

const state = {
  char:null,
  characters: [],
  page:1,
  pages:1,
  error:null,
  isLoading: true
};

const getters = {
  characters(state) {
    return state.characters;
  },
  isLoading(state) {
    return state.isLoading;
  },
  pages(state) {
    return state.pages;
  },
  page(state) {
    return state.page;
  },
  error(state) {
    return state.error;
  },
  char(state) {
    return state.char;
  }

};

const actions = {
  async [GET_ALL_CHARACTERS]({ commit }, page=1) {
   commit(FETCH_START);
    return GetRequest(`${apiBase}/characters/all?page=`+page)
    .then( data => {
      setTimeout(()=>{
        commit(FETCH_END, data)
      },500)
    })
    .catch(error => {
      commit(FETCH_CHARACTERS_ERROR)
    });
  },
  async [GET_CHAR_DATA]({ commit }, id) {
   commit(FETCH_START);
    return GetRequest(`${apiBase}/characters/get/${id}`)
    .then( data => {
      setTimeout(()=>{
        commit(FETCH_CHAR_END, data)
      },500)
    })
    .catch(error => {
      commit(FETCH_CHARACTERS_ERROR)
    });
  },
  async [RESET_CHARS_DATA]({ commit }) {
   commit(RESET_CHARS_DATA);
  }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [FETCH_START](state) {
    state.isLoading = true;
  },
  [FETCH_END](state, data ) {
    state.characters = data.data;
    state.pages      = data.pages.last_page;
    state.isLoading  = false;
  },
  [FETCH_CHARACTERS_ERROR](state ) {
    state.isLoading  = false;
    state.error      = {
      message : "Server error"
    }
  },
  [FETCH_CHAR_END](state,data) {
    state.char       = data.data;
    state.isLoading  = false;
  },
  [RESET_CHARS_DATA](state) {
    state.char       = [];
    state.isLoading  = false;
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};
