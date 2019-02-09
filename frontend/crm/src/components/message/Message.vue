<template>
  <div class="contents">
    <div class="row">
      <div class="col col-12">
        <div class="col_header center">
          <h2>공통 메시지 설정</h2>
          <span class="meta_menu add_member">
            <button
              class="btn purple rounded"
              v-on:click="store_print">
              한번 출력해보자
            </button>
            <button
              class="btn purple rounded"
              v-on:click="btn_store">
              전체 저장
            </button>
          </span>
        </div>
        <div class="col_body">
          <div class="message_list">
            <div class="text_setup">
              <ul>
                <Item
                  v-for="(item) in getMessages"
                  v-bind:item="item"
                  v-bind:key="item.id"
                ></Item>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Item from './MessageItem'
import { BUS } from './EventBus'

export default {
  name: 'Message',
  computed: {
    ...mapGetters([
      'getMessages'
    ])
  },
  components: {
    'Item': Item
  },
  methods: {
    btn_store: function (event) {
      // alert(this.$store.getters.getMessages[1].text)
      BUS.$emit('store')
    },
    store_print: function (event) {
      console.log(JSON.parse(JSON.stringify(this.$store.getters)))
    }
  },
  created () {
    this.$store.dispatch('getCommonMessage')
  }
}
</script>
