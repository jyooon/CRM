<template>
    <div class="popup">
        <div class="pop_contents msg_setup">

            <div class="pop_header">
                <h2>개인 메시지 설정하기</h2>
                <div @click="handleCancle" class="icon_close">
                    <img src="../../images/icon_close.png">
                </div>
            </div>

            <div class="pop_body">

                <!-- 팝업 내용 변경 가능한 부분 시작 -->
                <div class="message_list">
                    <div class="text_setup">
                        <ul>
                            <Item
                                v-for="(item) in getMyMessages"
                                v-bind:item="item"
                                v-bind:key="item.id"
                            ></Item>
                        </ul>
                    </div>
                    <div class="text_setup">
                        <ul>
                            <li>
                                <div class="memo">
                                    <div class="shortcut">
                                        <span class="ctrl_key">Alt +</span> <div class="alt_number"><span>1</span></div>
                                    </div>
                                    <input type="file" @change="onFileChanged">
                                    <button @click="onUpload">Upload!</button>
                                    <!-- <div class="memo_img">
                                        <img src="../../images/sample02.jpg">
                                    </div> -->
                                </div>
                            </li>
                            <li>
                                <div class="memo">
                                    <div class="shortcut">
                                        <span class="ctrl_key">Alt +</span> <div class="alt_number"><span>2</span></div>
                                    </div>
                                    <!-- <input type="file" @change="onFileChanged">
                                    <button @click="onUpload">Upload!</button> -->
                                    <!-- <div class="memo_img">
                                        <img src="../../images/sample02.jpg">
                                    </div> -->
                                </div>
                            </li>
                            <li>
                                <div class="memo">
                                    <div class="shortcut">
                                        <span class="ctrl_key">Alt +</span> <div class="alt_number"><span>3</span></div>
                                    </div>
                                    <form action="" method="post" enctype="multipart/form-data" name="">
                                        <input type="file" name="FileName">
                                    </form>
                                    <div class="memo_img">
                                        <img src="../../images/sample02.jpg">
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- // 팝업 내용 변경 가능한 부분 끝 -->

            </div>

            <div class="pop_footer txt_right">
                <button class="btn purple btn_lg" @click='handleStore'>저장하기</button>
            </div>

        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Item from './MyMessageItem'
import axios from 'axios'

export default {
  name: 'MyMessage',
  computed: {
    ...mapGetters([
      'getMyMessages',
      'getReviseState'
    ])
  },
  components: {
    'Item': Item
  },
  data() {
    return {
      selectedFile: null
    }
  },
  methods: {
    handleCancle () {
      this.$store.commit('cancleMyMessage')
    },
    handleStore () {
      if (this.getReviseState.state) {
        this.$store.dispatch('storeMyMessage')
      }
    },
    onFileChanged (event) {
      this.selectedFile = event.target.files[0]
    },
    onUpload () {
      // upload file
    }
  },
  mounted () {
    if (this.getReviseState.state) {
      this.$store.dispatch('getMyMessage', this.getReviseState.id)
    }
  }
}
</script>
