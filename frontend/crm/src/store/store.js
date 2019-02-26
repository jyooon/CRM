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
    memberInputForm: {name: '', age: 0, sex: '', telegramID: '', kakaoID: '', lineID: '', address: '', latitude: 0, hardness: 0, talkList: []},
    talkInputForm: {talk_type: '', talk_name: '', talk_age: 0, deviceID: ''},
    myMessage: [
      // {id: 1, text: '1'},
      // {id: 2, text: '2'},
      // {id: 3, text: '3'},
      // {id: 4, text: '4'},
      // {id: 5, text: '5'},
      // {id: 6, text: '6'},
      // {id: 7, text: '7'},
      // {id: 8, text: '8'},
      // {id: 9, text: '9'},
      // {id: 10, text: '10'}
    ],
    members: [
      {
        id: 100,
        name: '이민혁',
        age: 25,
        sex: 'M',
        address: '서울특별시 강남구 머머동',
        latitude: 12.9,
        hardness: 14.9,
        talkList: [
          {id: 0, talk_type: 'telegram', deviceID: 'tele', talk_name: '민혁2', talk_age: 25},
          {id: 1, talk_type: 'kakao', deviceID: 'kakao', talk_name: '민혁2', talk_age: 25},
          {id: 2, talk_type: 'line', deviceID: 'line', talk_name: '민혁2', talk_age: 25}
        ],
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
        talkList: [
          {id: 3, talk_type: 'telegram', deviceID: 'tele', talk_name: '2리', talk_age: 25},
          {id: 4, talk_type: 'line', deviceID: 'line', talk_name: '두2', talk_age: 25}
        ],
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
        talkList: [
          {id: 5, talk_type: 'telegram', deviceID: 'tele', talk_name: '지은2', talk_age: 25},
          {id: 6, talk_type: 'kakao', deviceID: 'kakao', talk_name: '나우', talk_age: 25}
        ],
        state: false
      }
    ],
    schedulerData: [
      {
        'AppointmentId': 1,
        'Booker': '김나나',
        'Name': '가가가',
        'StartDate': '2019-02-20T07:30:00',
        'EndDate': '2019-02-20T08:00:00',
        'Memo': '밥먹기',
        'Cost': 100
      },
      {
        'AppointmentId': 2,
        'Booker': '김나나',
        'Name': '가가가',
        'StartDate': '2019-02-20T08:30:00',
        'EndDate': '2019-02-20T09:00:00',
        'Memo': '약속잡기',
        'Cost': 50
      }
    ]
  },
  getters: {
    getMyMessages: (state) => {
      return state.myMessage
    },
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
    },
    getTalkList: (state) => {
      return state.memberInputForm.talkList
    },
    getTalkInputForm: (state) => {
      return state.talkInputForm
    },
    getSchedulerData: (state) => {
      return state.schedulerData
    }
  },
  mutations: {
    updateMyMessage: (state, payload) => {
      let msg = state.myMessage.find(i => i.id === payload.id)
      msg.text = payload.text
    },
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
      // console.log(state.members)
      let member = state.members.find(i => i.id === payload)
      member.state = !member.state
      // console.log(member.state)
    },
    memberFormState: (state) => {
      state.memberFormState = true
    },
    talkFormState: (state) => {
      state.talkFormState = true
    },
    cancleTalkForm: (state) => {
      state.talkFormState = false
      state.talkInputForm = {talk_type: '', talk_name: '', talk_age: 0, deviceID: ''}
    },
    reviseState: (state, payload) => {
      state.reviseState.state = true
      state.reviseState.id = payload
      state.memberInputForm = state.members.find(i => i.id === state.reviseState.id)
      // console.log('revise', state.members.find(i => i.id === state.reviseState.id).state)
    },
    formCancle: (state) => {
      state.memberFormState = false
      state.talkFormState = false
      state.reviseState.state = false
      state.reviseState.id = ''
      state.memberInputForm = {name: '', age: 0, sex: '', telegramID: '', kakaoID: '', lineID: '', address: '', latitude: 0, hardness: 0, talkList: []}
      state.myMessage = []
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
    setMembers: (state, payload) => {
      state.members = payload
    },
    addTalk: (state) => {
      state.memberInputForm.talkList.push(state.talkInputForm)
      state.talkFormState = false
      state.talkInputForm = {talk_type: '', talk_name: '', talk_age: 0, deviceID: ''}
    },
    talkRevise: (state, payload) => {
      state.talkFormState = true
      state.talkInputForm = payload
    },
    talkUpdated: (state, payload) => {
      state.memberInputForm.talkList.forEach(i => {
        if (i.id === payload.id) {
          return (i = payload)
        }
      })
      state.talkFormState = false
      state.talkInputForm = {talk_type: '', talk_name: '', talk_age: 0, deviceID: ''}
    },
    addScheduler: (state, payload) => {
      state.schedulerData = state.schedulerData.concat(payload)
    }
  },
  actions: {
    // deleteSchedule: (context, payload) => {
    //   return axios
    //     .post('scheduler/delete/',
    //       {
    //         data: payload
    //       })
    //     .then(res => {
    //       if (res.data === 'success') {
    //         console.log('success delete')
    //       }
    //     })
    // },
    addSchedule: (context, payload) => {
      return axios
        .post('/scheduler/add/',
          {
            data: payload
          })
        .then(res => {
          if (res.data === 'success') {
            console.log('success add')
          }
        })
    },
    changeState: ({ state }, payload) => {
      let member = state.members.find(i => i.id === payload)
      // console.log('action1', state.members)
      return axios
        .put('/member/statusupdate/',
          {
            id: payload,
            status: !member.state
          })
        .then(res => {
          if (res.data === 'success') {
            member.state = !member.state
            console.log('action2', member.state)
            // context.commit('changeState', payload)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    getCommonMessage: (context) => {
      return axios
        .get('auth/public_message/')
        .then((res) => {
          return context.commit('loadMessageToServer', res.data)
        })
    },
    postCommonMessage: (context, payload) => {
      return axios
        .post('auth/public_message/', payload)
        .then((data) => {
          console.log(data)
        })
    },
    login: (context, payload) => {
      return axios
        .post('auth/login/', {
          username: payload.username,
          password: payload.password
        })
        .then((data) => {
          context.commit('login', data.data)
        })
    },
    getMembers: (context) => {
      return axios
        .get('member/all/', {
          params: {id: sessionStorage.getItem('id')}
        })
        .then((data) => {
          data.data.forEach(item => {
            item.state = false
          }, context.commit('setMembers', data.data))
        })
    },
    addMember: ({ state }) => {
      let sendJson = {}
      sendJson.id = sessionStorage.getItem('id')
      sendJson.data = state.memberInputForm
      sendJson.msg = state.myMessage
      console.log(sendJson)
      return axios
        .post('member/add/', sendJson)
        .then(data => {
          console.log(data.data)
        })
    },
    deleteMember: (context, payload) => {
      return axios
        .delete('member/delete/', {
          headers: {'Content-Type': 'application/json'},
          data: {
            id: sessionStorage.getItem('id'),
            memberID: payload
          }
        })
    },
    updateInfo: ({ state }) => {
      return axios
        .put('member/update/', {
          id: sessionStorage.getItem('id'),
          data: state.memberInputForm
          // msg: state.myMessage
        })
    },
    storeMyMessage: ({ state }, payload) => {
      return axios
        .post('message_info/create/', {
          id: payload,
          data: state.myMessage
        })
        .then(data => {
          console.log(data.data)
        })
    },
    getMyMessage: ({ state }, payload) => {
      return axios
        .get('message_info/get/', {
          params: {id: payload}
        })
        .then((data) => {
          console.log(data.data)
          state.myMessage = data.data.Messages
        })
    },
    getMyMessageInit: ({ state }) => {
      return axios
        .get('auth/public_message/')
        .then((res) => {
          state.myMessage = res.data.commonMessages
        })
    }
  }
})
