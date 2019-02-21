<template>
    <div class="row">
        <div class="col col-4 form">
            <MemberInfo
                v-if="getMemberFormState"
            ></MemberInfo>
            <div v-else>
                <h3>직원 기본 정보 입력하기</h3>
                <h5>직원 추가를 선택하거나 직원 수정을 선택하면 활성화 됩니다.</h5>
            </div>
        </div>
        <div class="col col-4 talk">
            <TalkList
                v-if="getMemberFormState">
            </TalkList>
            <div v-else>
                <h3>톡 종류</h3>
                <h5>톡 종류 목록이 없습니다. 추가하기를 눌러 추가해 보세요.</h5>
            </div>
        </div>
        <div class="col col-4 talk_form">
            <talk-info
                v-if="getMemberFormState&&getTalkFormState"
            ></talk-info>
            <div v-else>
                <h3>톡 정보 수정</h3>
                <h5>톡 종류를 선택하거나 톡 종류 추가를 누르면 활성화됩니다.</h5>
            </div>
        </div>
        <my-message v-if="getMyMessageState"></my-message>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MemberInfo from './MemberInfo'
import TalkList from './TalkList'
import TalkInfo from './TalkInfo'
import MyMessage from './MyMessage'

export default {
  name: 'MemberForm',
  computed: {
    ...mapGetters([
      'getMembers',
      'getMemberFormState',
      'getTalkFormState',
      'getReviseState',
      'getMyMessageState'
    ])
  },
  components: {
    'MemberInfo': MemberInfo,
    'TalkList': TalkList,
    'TalkInfo': TalkInfo,
    'MyMessage': MyMessage
  }
}
</script>
