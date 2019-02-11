<template>
    <li :id="'item_'+index">
        <div class="list_item">
            <div class="list_top">
                <div class="thumb">
                    <div class="thumb_img">
                        <img src="../../images/sp_mh.png">
                    </div>
                </div>
                <div class="name_wrap">
                    <div class="name">{{name}}</div>
                        <div class="button r" id="button-1">
                            <input
                              type="checkbox"
                              class="checkbox"
                              v-on:click="handleToggle(index)"
                              :checked = !state>
                            <div class="knobs"></div>
                            <div class="layer"></div>
                        </div>
                        <h5 class="revise">{{getReviseState.id===index?'수정중':''}}</h5>
                    <div class="desc">{{age}}살, {{sex==='F'?'여':'남'}}, {{address}}</div>
                </div>
                <div class="icon_more" :id="'more_'+index" >
                    <span>
                    <img src="../../images/icon_more_h.png">
                    </span>
                    <div class="more_menu" >
                        <ul>
                            <li v-on:click="handleRevise">수정</li>
                            <li v-on:click="handleDelete">삭제</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </li>
</template>
<style>
.icon_more:hover .more_menu {
  display: block;
}
.icon_more .more_menu {
  display: none;
}
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MemberItem',
  props: ['item'],
  data () {
    const { item } = this
    return {
      index: item.id,
      name: item.name,
      age: item.age * 1,
      sex: item.sex,
      address: item.address,
      state: item.state
    }
  },
  computed: {
    ...mapGetters([
      'getReviseState',
      'getMemberFormState'
    ])
  },
  methods: {
    handleToggle (id) {
      this.$store.commit('changeState', id)
    },
    handleRevise () {
      // console.log(this.$store.getters.getMember(this.index))
      if (this.getMemberFormState) {
        if (confirm('작성중인 내용이 삭제됩니다.')) {
          this.$store.commit('reviseState', this.index)
        }
        // alert('작성취소를 누르고 다시 시도하세요')
      } else {
        this.$store.commit('memberFormState')
        this.$store.commit('reviseState', this.index)
      }
    },
    handleDelete () {
      if (confirm('진심? 삭제?')) {
        // this.$store.commit('deleteMember', this.item.id)
        this.$store.dispatch('deleteMember', this.index).then(() => {
          this.$store.dispatch('getMembers')
        })
      }
    }
  }
}
</script>
