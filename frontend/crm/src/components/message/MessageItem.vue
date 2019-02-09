<template>
    <li>
        <div class="memo">
            <div class="shortcut">
                <span class="ctrl_key">Ctrl +</span> <div class="ctrl_number"><span>{{(id)%10}}</span></div>
            </div>
            <textarea
                class="memo_txt"
                v-model="message"
                ref="memo_txt">
            </textarea>
        </div>
    </li>
</template>

<script>
import { BUS } from './EventBus'
export default {
  name: 'MessageItem',
  props: ['item'],
  data () {
    return {
      message: this.item.text,
      id: this.item.id
    }
  },
  methods: {
    print (event) {
      console.log(this.item.id, this.$refs.memo_txt.value)
    },
    store (event) {
      this.$store.commit('updateMessage', {
        index: this.id,
        text: this.message
      }, this.postToServer())
    },
    postToServer (id) {
      if (this.id === 10) {
        const json = JSON.stringify(this.$store.getters.getMessages)
        this.$store.dispatch('postCommonMessage', JSON.parse(json))
      }
    }
  },
  mounted () {
    BUS.$on('store', this.store)
  }
}
</script>
