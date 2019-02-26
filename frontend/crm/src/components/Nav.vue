<template>
  <!-- nav -->
    <nav class="nav">
        <ul>
            <router-link tag='li' to='/' class="logo">
                <span></span>
            </router-link>
            <router-link tag='li' to="/chat" exact>
                <div class="menu_icon">
                    <img src="../images/icon_chat.png">
                </div>
                <div class="menu">채팅관리</div>
            </router-link>
            <router-link tag='li' to="/member" exact>
                <div class="menu_icon">
                    <img src="../images/icon_member.png">
                </div>
                <div class="menu">직원</div>
            </router-link>
            <router-link tag='li' to="/message" exact>
                <div class="menu_icon">
                    <img src="../images/icon_message.png">
                </div>
                <div class="menu">메시지</div>
            </router-link>
        </ul>
        <div
          class="logout"
          v-show="getLoginState"
          v-on:click="logout"
        >로그아웃</div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Nav',
  data () {
    return {
      active: 'home'
    }
  },
  computed: {
    ...mapGetters([
      'getLoginState'
    ])
  },
  methods: {
    logout () {
      this.$store.commit('logout')
    }
  }
}
</script>
