<template>
    <div>
        <h3>톡 정보 수정</h3>

        <div class="input_title">톡 종류</div>
        <div class="input_content">
            <select v-model="type">
                <option value="" disable selected>톡 종류를 선택해 주세요.</option>
                <option>텔레그램</option>
                <option>카카오톡</option>
                <option>라인</option>
            </select>
        </div>

        <div class="input_title">닉네임</div>
        <div class="input_content"><input type="text" placeholder="닉네임을 입력해 주세요." v-model="talk_name"></div>

        <div class="input_title">나이</div>
        <div class="input_content">
            <select v-model="talk_age">
                <option value=0 disable selected>나이를 선택해 주세요</option>
                <option
                    v-for="n in (10 , 50)"
                    v-bind:key=n>
                    {{n*1}}
                </option>
            </select>
        </div>

        <div class="input_title"> Device ID</div>
        <div class="input_content"><input type="text" placeholder="Device ID를 입력해 주세요." v-model="deviceID"></div>
            <button
            class="btn purple rounded"
            @click="btnCancle">
            작성 취소
            </button>
            <button
            class="btn purple rounded"
            @click="btnStore">
            내용 저장
            </button>
    </div>
</template>

<script>

export default {
  name: 'TalkInfo',
  data () {
    return {
      type: '',
      talk_name: '',
      talk_age: '',
      deviceID: ''
    }
  },
  methods: {
    btnCancle () {
      this.$store.commit('cancleTalkForm')
    },
    btnStore () {
      console.log(this.type, this.talk_name, this.talk_age, this.deviceID)
      if (this.talk_name === '' || this.talk_age === '' || this.deviceID === '') {
        return alert('빈칸을 모두 채워주세요!')
      }
      const item = {deviceID: this.deviceID, talk_name: this.talk_name, talk_age: this.talk_age * 1}
      if (this.type === '카카오톡') {
        this.$store.commit('talkInfoKakao', item)
        this.$store.commit('cancleTalkForm')
      } else if (this.type === '텔레그램') {
        this.$store.commit('talkInfoTelegram', item)
        this.$store.commit('cancleTalkForm')
      } else if (this.type === '라인') {
        this.$store.commit('talkInfoLine', item)
        this.$store.commit('cancleTalkForm')
      } else {
        alert('톡 종류를 선택해 주세요')
      }
    }
  }
}
</script>
