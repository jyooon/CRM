<template>
    <div>
        <h3>톡 종류 <span class="meta_menu add_btn"><button class="btn purple rounded" v-on:click="talkInfo">+</button></span></h3>
        <div class="talk_list">
            <ul>
                <li v-show="getMemberInputForm.kakao!=''">
                    <div class="list_sns kt">
                        <img src="../../images/list_kt.png">
                    </div>
                    <div class="sns_nick"><span>(카카오톡)</span> <span>{{getMemberInputForm.kakao.talk_name}}</span></div>
                    <div class="icon_next">
                        <img src="../../images/icon_next.png">
                    </div>
                </li>
                <li v-show="getMemberInputForm.line!=''">
                    <div class="list_sns line">
                        <img src="../../images/list_line.png">
                    </div>
                    <div class="sns_nick"><span>(라인)</span> <span>{{getMemberInputForm.line.talk_name}}</span></div>
                    <div class="icon_next">
                        <img src="../../images/icon_next.png">
                    </div>
                </li>
                <li v-show="getMemberInputForm.telegram!=''">
                    <div class="list_sns tele">
                        <img src="../../images/list_tele.png">
                    </div>
                    <div class="sns_nick"><span>(텔레그램)</span> <span>{{getMemberInputForm.telegram.talk_name}}</span></div>
                    <div class="icon_next">
                        <img src="../../images/icon_next.png">
                    </div>
                </li>
                <!-- <li>
                    <div class="list_sns band">
                        <img src="../../images/list_band.png">
                    </div>
                    <div class="sns_nick"><span>(밴드)</span> <span>토마토</span></div>
                    <div class="icon_next">
                        <img src="../../images/icon_next.png">
                    </div>
                </li> -->
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TalkList',
  computed: {
    ...mapGetters([
      'getMyMessageState',
      'getReviseState',
      'getMemberInputForm'
    ])
  },
  methods: {
    talkInfo () {
      this.$store.commit('talkFormState')
    }
  }
}
</script>
