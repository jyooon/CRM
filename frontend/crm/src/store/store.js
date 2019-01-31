import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    commonMessages:
      [
        {
          id: 0,
          text: '안녕하세요1'
        },
        {
          id: 1,
          text: '안녕하세요2'
        },
        {
          id: 2,
          text: '안녕하세요3'
        },
        {
          id: 3,
          text: '안녕하세요4'
        },
        {
          id: 4,
          text: '안녕하세요5'
        },
        {
          id: 5,
          text: '안녕하세요6'
        },
        {
          id: 6,
          text: '안녕하세요7'
        },
        {
          id: 7,
          text: '안녕하세요8'
        },
        {
          id: 8,
          text: '안녕하세요9'
        },
        {
          id: 9,
          text: '안녕하세요0'
        }
      ]
  },
  getters: {
    getMessages: function (state) {
      return state.commonMessages
    }
  },
  mutations: {
    updateMessage: function (state, payload) {
      state.commonMessages[payload.index].text = payload.text
    }
  },
  actions: {
    addCounter: function (context) {
      return context.commit('addCounter')
    },
    getServerData: function (context) {
      return axios.get('sample.json').then(function () {
        // ...
      }, context.commit('delayFewMinutes'))
    },
    delayFewMinutes: function (context) {
      return setTimeout(function () {
        context.commit('addCounter')
      }, 1000)
    },
    asyncIncrement: function (context, payload) {
      return setTimeout(function () {
        context.commit('increment', payload.by)
      }, payload.duration)
    }
  }
})
