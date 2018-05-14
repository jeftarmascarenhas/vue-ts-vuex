import Vue from 'vue'
import Vuex from 'vuex'

import todos from './todo/index';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    todos
  },
  strict: debug
})