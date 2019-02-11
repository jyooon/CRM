<template>
    <div>
    <h3>직원 기본 정보 입력하기</h3>
        <div class="memberInfo">
            <h5>{{getReviseState.state?'ID: '+getReviseState.id+' 직원정보 수정':''}}</h5>
            <div class="input_title">이름 <span>(필수)</span></div>
            <div class="input_content"><input type="text" placeholder="이름을 입력해 주세요." v-model="getMemberInputForm.name"></div>

            <div class="input_title">나이 <span>(필수)</span></div>
            <div class="input_content">
                <select v-model="getMemberInputForm.age">
                    <option value=0 disable selected>나이를 선택해 주세요</option>
                    <option
                      v-for="n in (10 , 50)"
                      v-bind:key=n>
                      {{n*1}}
                    </option>
                </select>
            </div>

            <div class="input_title">성별 <span>(필수)</span></div>
            <div class="input_content">
                <div class="multi_chk">
                    <div class="split">
                        <p class="radio">
                            <input type="radio" name="r01" value="F" id="F" v-model="getMemberInputForm.sex"> <label for="F"><span></span>여자</label>
                        </p>
                    </div>
                    <div class="split">
                        <p class="radio">
                            <input type="radio" name="r01" value="M" id="M" v-model="getMemberInputForm.sex"> <label for="M"><span></span>남자</label>
                        </p>
                    </div>
                </div>
            </div>

            <div class="input_title">텔레그램 ID <span>(필수)</span></div>
            <div class="input_content"><input type="text" placeholder="텔레그램 ID를 입력해 주세요." v-model="getMemberInputForm.telegramID" ></div>

            <div class="input_title">카카오톡 ID</div>
            <div class="input_content"><input type="text" placeholder="카카오톡 ID를 입력해 주세요." v-model="getMemberInputForm.kakaoID" ></div>

            <div class="input_title">라인 ID</div>
            <div class="input_content"><input type="text" placeholder="라인 ID를 입력해 주세요." v-model="getMemberInputForm.lineID" ></div>

            <div class="input_title">위치 <span>(필수)</span></div>
            <div class="input_content"><input type="text" placeholder="위치를 설정해 주세요." @click="handleAddress" v-model="getMemberInputForm.address" readonly></div>

        </div>
        <h3>개인 메시지 설정</h3>
        <div>
            <div class="input_content">
                <button class="btn purple full" id="msgSetup" @click="handleMyMessage">개인 메시지 설정하기</button>
            </div>
            <div class="input_content">
                <div class="long_row_chk">
                    <p class="check">
                        <input type="checkbox" id="c011"> <label for="c011"><span></span>Ctrl + 1을 Auto Message로 설정</label>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js?autoload=false"></script>
<script>
import { mapGetters } from 'vuex'
import MyMessage from './MyMessage'
import axios from 'axios'

export default {
  name: 'MemberInfo',
  computed: {
    ...mapGetters([
      'getMyMessageState',
      'getReviseState',
      'getMemberInputForm'
    ])
  },
  components: {
    'MyMessage': MyMessage
  },
  methods: {
    handleMyMessage () {
      this.$store.commit('myMessageState')
    //   console.log(JSON.parse(JSON.stringify(this.getReviseState.info)))
    },
    handleAddress () {
      daum.postcode.load(() => {
        new daum.Postcode({
          oncomplete: (data) => {
            this.getMemberInputForm.address = data.roadAddress
            // console.log(data)
            axios.get('https://dapi.kakao.com/v2/local/search/address.json',
            {
              headers: { Authorization: 'KakaoAK e138dd583112fa6de45d660fa62be6c9' },
              params: { query: data.roadAddress}
            })
            .then(res => {
              console.log(res)
              this.getMemberInputForm.latitude = res.data.documents[0].x*1
              this.getMemberInputForm.hardness = res.data.documents[0].y*1
            })
          }
        }).open()
      })
    }
  }
}
</script>
