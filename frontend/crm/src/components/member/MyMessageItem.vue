<template>
    <li>
        <div class="memo">
            <div class="shortcut">
                <span class="ctrl_key">Ctrl +</span> <div class="ctrl_number"><span>{{(MyMsgID)%10}}</span></div>
            </div>
            <textarea
                class="memo_txt"
                :value="MyMsgText"
                @input="updateMessage"
                ref="memo_txt">
            </textarea>
        </div>
    </li>
</template>

<script>
export default {
  name: 'MyMessageItem',
  props: ['item'],
  computed: {
    MyMsgText () {
      return this.item.text
    },
    MyMsgID () {
      return this.item.id
    }
  },
  methods: {
    updateMessage (e) {
      let object = {id: this.item.id, text: e.target.value}
      this.$store.commit('updateMyMessage', object)
    }
  }
}
</script>
