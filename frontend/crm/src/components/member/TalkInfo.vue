<template>
    <div>
        <h3>톡 정보 수정</h3>

        <div class="input_title">톡 종류</div>
        <div class="input_content">
            <select v-model="getTalkInputForm.talk_type">
                <option value="" disable selected>톡 종류를 선택해 주세요.</option>
                <option value="telegram">텔레그램</option>
                <option value="kakao">카카오톡</option>
                <option value="line">라인</option>
                <option value="band">밴드</option>
            </select>
        </div>

        <div class="input_title">닉네임</div>
        <div class="input_content"><input type="text" placeholder="닉네임을 입력해 주세요." v-model="getTalkInputForm.talk_name"></div>

        <div class="input_title">나이</div>
        <div class="input_content">
            <select v-model="getTalkInputForm.talk_age">
                <option value=0 disable selected>나이를 선택해 주세요</option>
                <option
                    v-for="n in (10 , 50)"
                    v-bind:key=n>
                    {{n*1}}
                </option>
            </select>
        </div>

        <div class="input_title"> Device ID</div>
        <div class="input_content"><input type="text" placeholder="Device ID를 입력해 주세요." v-model="getTalkInputForm.deviceID"></div>
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
import { mapGetters } from 'vuex'

export default {
  name: 'TalkInfo',
  computed: {
    ...mapGetters([
      'getTalkInputForm'
    ])
  },
  methods: {
    btnCancle () {
      this.$store.commit('cancleTalkForm')
    },
    btnStore () {
      const talkInput = this.getTalkInputForm
      if (talkInput.talk_type === '' || talkInput.talk_name === '' || talkInput.talk_age === '' || talkInput.deviceID === '') {
        return alert('빈칸을 모두 채워주세요!')
      }
      if (talkInput.id === undefined) {
        this.$store.commit('addTalk')
      } else {
        this.$store.commit('talkUpdated', talkInput)
      }
      // if (talkInput.id === undefined) {
      // } else {
      //   this.$store.commit('talkUpdated', talkInput)
      // }
    }
  }
}
</script>
