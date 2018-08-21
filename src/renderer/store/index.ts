import Vue from 'vue'
import * as Vuex from 'vuex'
import modules from './modules'

Vue.use(<any>Vuex)

export default new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production'
})
