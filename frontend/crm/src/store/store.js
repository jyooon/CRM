import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    id: '',
    loginState: false,
    memberFormState: false,
    talkFormState: false,
    reviseState: {state: false, id: ''},
    myMessageState: false,
    commonMessages: [],
    memberInputForm: {name: '', age: 0, sex: '', address: '', latitude: 0, hardness: 0, telegram: '', kakao: '', line: ''},
    members: [
      {
        id: 100,
        name: '이민혁',
        age: 25,
        sex: 'M',
        address: '서울특별시 강남구 머머동',
        latitude: 12.9,
        hardness: 14.9,
        telegram: {deviceID: 'tele', talk_name: '민혁2', talk_age: 25},
        kakao: {deviceID: 'kakao', talk_name: '민혁2', talk_age: 25},
        line: {deviceID: 'line', talk_name: '민혁2', talk_age: 25},
        state: false
      },
      {
        id: 101,
        name: '차두리',
        age: 38,
        sex: 'M',
        address: '대구광역시 달성구 김치동',
        latitude: 12.9,
        hardness: 14.9,
        telegram: {deviceID: 'tele', talk_name: '2리', talk_age: 25},
        kakao: '',
        line: {deviceID: 'line', talk_name: '두2', talk_age: 25},
        state: false
      },
      {
        id: 102,
        name: '이지금',
        age: 27,
        sex: 'F',
        address: '부산광역시 금정구 장전동',
        latitude: 12.9,
        hardness: 14.9,
        telegram: {deviceID: 'tele', talk_name: '지은2', talk_age: 25},
        kakao: {deviceID: 'kakao', talk_name: '나우', talk_age: 25},
        line: '',
        state: false
      }
    ]
  },
  getters: {
    getMemberInputForm: (state) => {
      return state.memberInputForm
    },
    getMessages: (state) => {
      return state.commonMessages
    },
    getMembers: (state) => {
      return state.members
    },
    getLoginState: (state) => {
      return state.loginState
    },
    getMemberFormState: (state) => {
      return state.memberFormState
    },
    getTalkFormState: (state) => {
      return state.talkFormState
    },
    getReviseState: (state) => {
      return state.reviseState
    },
    getMyMessageState: (state) => {
      return state.myMessageState
    },
    getMember: (state) => id => {
      let member = state.members.find(i => i.id === id)
      return member
    },
    getLoginID: (state) => {
      return state.id
    }
  },
  mutations: {
    updateMessage: (state, payload) => {
      state.commonMessages[payload.index - 1].text = payload.text
    },
    loadMessageToServer: (state, payload) => {
      state.commonMessages = payload.commonMessages
    },
    login: (state, payload) => {
      state.loginState = true
      state.id = payload.user.id
      sessionStorage.setItem('id', payload.user.id)
    },
    logout: (state) => {
      state.loginState = false
    },
    changeState: (state, payload) => {
      let member = state.members.find(i => i.id === payload)
      member.state = !member.state
      console.log(state.members)
    },
    memberFormState: (state) => {
      state.memberFormState = true
    },
    talkFormState: (state) => {
      state.talkFormState = true
    },
    cancleTalkForm: (state) => {
      state.talkFormState = false
    },
    reviseState: (state, payload) => {
      state.reviseState.state = true
      state.reviseState.id = payload
      state.memberInputForm = state.members.find(i => i.id === state.reviseState.id)
    },
    formCancle: (state) => {
      state.memberFormState = false
      state.talkFormState = false
      state.reviseState.state = false
      state.reviseState.id = ''
      state.memberInputForm = {name: '', age: 0, sex: '', address: '', latitude: 0, hardness: 0, telegram: '', kakao: '', line: ''}
    },
    deleteMember: (state, payload) => {
      state.members.some((member, index) => {
        if (member.id === payload) state.members.splice(index, 1)
      })
    },
    myMessageState: (state) => {
      state.myMessageState = true
    },
    cancleMyMessage: (state) => {
      state.myMessageState = false
    },
    talkInfoKakao: (state, payload) => {
      state.memberInputForm.kakao = payload
    },
    talkInfoTelegram: (state, payload) => {
      state.memberInputForm.telegram = payload
    },
    talkInfoLine: (state, payload) => {
      state.memberInputForm.line = payload
    },
    setMembers: (state, payload) => {
      state.members = payload
    }
  },
  actions: {
    getCommonMessage: (context) => {
      return axios
        .get('/auth/public_message/')
        .then((res) => {
          return context.commit('loadMessageToServer', res.data)
        })
    },
    postCommonMessage: (context, payload) => {
      return axios
        .post('/auth/public_message/', payload)
        .then((data) => {
          console.log(data)
        })
    },
    login: (context, payload) => {
      return axios
        .post('/auth/login/', {
          username: payload.username,
          password: payload.password
        })
        .then((data) => {
          context.commit('login', data.data)
        })
    },
    getMembers: (context) => {
      return axios
        .get('/member/all', {
          params: {id: sessionStorage.getItem('id')}
        })
        .then((data) => {
          context.commit('setMembers', data.data)
          console.log(data.data)
        })
    },
    addMember: ({ state }) => {
      let sendJson = {}
      sendJson.id = sessionStorage.getItem('id')
      sendJson.data = state.memberInputForm
      return axios
        .post('/member/add', sendJson)
        .then(data => {
          console.log(data.data)
        })
    },
    deleteMember: (context, payload) => {
      return axios
        .delete('/member/delete', {
          headers: {'Content-Type': 'application/json'},
          data: {
            id: sessionStorage.getItem('id'),
            memberID: payload
          }
        })
    }
  }
})
