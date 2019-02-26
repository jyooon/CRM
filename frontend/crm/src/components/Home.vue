<template>
  <div class="home">
    <div class="login">
      <h1>Welcome</h1>
      <br/>
      <form @submit.prevent="sendPost">
        <input class="loginForm" type="text" name="u" placeholder="Username" required="required" autocomplete="off" v-model="username" />
        <input class="loginForm" type="password" name="p" placeholder="Password" required="required" autocomplete="off" v-model="password"/>
        <button type="submit" class="logBtn logBtn-primary logBtn-block logBtn-large">Log in</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: 'test01',
      password: '1234',
      submitted: false
    }
  },
  methods: {
    sendPost (event) {
      const { username, password } = this
      this.$store.dispatch('login', {
        username: username,
        password: password
      })
    }
  }
}
</script>
