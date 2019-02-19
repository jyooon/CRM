<template>

    <li @click="revise">
        <div class="list_sns kt">
            <img :src=talkImage>
        </div>
        <div class="sns_nick"><span>{{talkType}}</span>
        <span>{{talk_name}}</span>
        <span class='revise'>{{reviseState}}</span>
        </div>
        <div class="icon_next">
            <img src="../../images/icon_next.png">
        </div>
    </li>

</template>

<script>
import { mapGetters } from 'vuex'
import teleImage from '../../images/list_tele.png'
import kakaoImage from '../../images/list_kt.png'
import lineImage from '../../images/list_line.png'
import bandImage from '../../images/list_band.png'

export default {
  name: 'TalkItem',
  props: ['item', 'index'],
  data () {
    const { item } = this
    return {
      id: item.id,
      talk_type: item.talk_type,
      talk_name: item.talk_name,
      talk_age: item.talk_age,
      deviceID: item.deviceID
    }
  },
  computed: {
    reviseState () {
      let reviseID = this.getTalkInputForm.id
      console.log(reviseID)
      if (reviseID === undefined) return ''
      if (reviseID === this.id) return '수정중'
    },
    talkType () {
      const talkType = this.talk_type
      if (talkType === 'telegram') return '텔레그램'
      else if (talkType === 'kakao') return '카카오톡'
      else if (talkType === 'line') return '라인'
      else if (talkType === 'band') return '밴드'
    },
    talkImage () {
      const talkType = this.talk_type
      if (talkType === 'telegram') return teleImage
      else if (talkType === 'kakao') return kakaoImage
      else if (talkType === 'line') return lineImage
      else if (talkType === 'band') return bandImage
    },
    ...mapGetters([
      'getMyMessageState',
      'getReviseState',
      'getMemberInputForm',
      'getTalkInputForm'
    ])
  },
  methods: {
    revise () {
      // this.$store.commit('talkRevise', this.item)
    }
  }
}
</script>
