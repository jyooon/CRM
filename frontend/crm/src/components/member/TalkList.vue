<template>
    <div>
        <h3>톡 종류 <span class="meta_menu add_btn"><button class="btn purple rounded" v-on:click="talkAdd">+</button></span></h3>
        <div class="talk_list">
            <ul>
                <talk-item
                  v-for="(item) in getTalkList"
                  v-bind:item="item"
                  v-bind:key="item.id"
                ></talk-item>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TalkItem from './TalkItem'

export default {
  name: 'TalkList',
  computed: {
    ...mapGetters([
      'getTalkList'
    ])
  },
  components: {
    'TalkItem': TalkItem
  },
  methods: {
    talkAdd () {
      this.$store.commit('talkFormState')
    }
  }
}
</script>
