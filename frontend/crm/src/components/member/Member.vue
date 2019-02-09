<template>
  <!-- <div class="member"> -->
    <div class="contents">
        <div class="row">
            <div class="col col-3">
                <div class="row">
                    <div class="col col-12 shadow list">
                        <div class="col_header">
                            <h2>직원 목록</h2>
                            <span class="meta_menu add_member">
                                <button
                                  class="btn purple rounded"
                                  v-on:click="addMember"
                                  v-show="!getMemberFormState"
                                  >직원 추가</button>
                            </span>
                        </div>
                        <div class="col_body member_list" v-if="getMembers.length!=0">
                            <div class="search">
                                <input type="text" placeholder="직원 검색하기">
                            </div>
                            <ul>
                                <MemberItem
                                  v-for="(item) in getMembers"
                                  v-bind:item="item"
                                  v-bind:key="item.id"
                                ></MemberItem>
                            </ul>
                        </div>
                        <div class="col_body" v-else>등록된 직원이 없습니다.</div>
                    </div>
                </div>
            </div>
            <div class="col col-9 add_form">
                <div class="col_header center">
                    <h2>직원 추가하기</h2>
                    <span class="meta_menu add_member">
                        <button
                          class="btn purple rounded"
                          v-show="getMemberFormState"
                          v-on:click="btnCancle">
                          작성 취소
                        </button>
                        <button
                          class="btn purple rounded"
                          v-show="getMemberFormState"
                          v-on:click="btnStore">
                          전체 저장
                        </button>
                    </span>
                </div>
                <member-form></member-form>
            </div>
        </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MemberForm from './MemberForm'
import MemberItem from './MemberItem'
import MyMessage from './MyMessage'

export default {
  name: 'Member',
  computed: {
    ...mapGetters([
      'getMembers',
      'getMemberFormState',
      'getTalkFormState',
      'getMyMessageState',
      'getReviseState'
    ])
  },
  components: {
    'MemberItem': MemberItem,
    'MemberForm': MemberForm,
    'MyMessage': MyMessage
  },
  methods: {
    addMember () {
      if (this.getMemberFormState) alert('작성취소를 누르고 다시 시도하세요')
      else this.$store.commit('memberFormState')
    },
    btnCancle () {
      this.$store.commit('formCancle')
    },
    btnStore () {
      if (this.getReviseState.state) {
      } else {
        this.$store.dispatch('addMember')
          .then(() => {
            this.$store.commit('formCancle')
            this.$store.dispatch('getMembers')
          })
      }
    }
  },
  created () {
    this.$store.dispatch('getMembers')
  }
}
</script>
