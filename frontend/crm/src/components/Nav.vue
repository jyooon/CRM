<template>
  <!-- nav -->
    <nav class="nav">
        <ul>
            <li class="logo">
                <span></span>
            </li>
            <router-link tag='li' to="/chat">
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
        <div class="logout">로그아웃</div>
    </nav>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      active: 'home'
    }
  }
}
</script>
