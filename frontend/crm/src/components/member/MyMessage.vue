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
                            <li>
                                <div class="memo">
                                    <div class="shortcut">
                                        <span class="ctrl_key">Ctrl +</span> <div class="ctrl_number"><span>1</span></div>
                                    </div>
                                    <textarea class="memo_txt">안녕하세요, 반갑습니다.</textarea>
                                </div>
                            </li>
                            <li>
                                <div class="memo">
                                    <div class="shortcut">
                                        <span class="ctrl_key">Ctrl +</span> <div class="ctrl_number"><span>2</span></div>
                                    </div>
                                    <textarea class="memo_txt">안녕하세요, 반갑습니다.</textarea>
                                </div>
                            </li>
                            <li>
                                <div class="memo">
                                    <div class="shortcut">
                                        <span class="ctrl_key">Ctrl +</span> <div class="ctrl_number"><span>3</span></div>
                                    </div>
                                    <textarea class="memo_txt">안녕하세요, 반갑습니다.</textarea>
                                </div>
                            </li>
                            <li>
                                <div class="memo">
                                    <div class="shortcut">
                                        <span class="ctrl_key">Ctrl +</span> <div class="ctrl_number"><span>4</span></div>
                                    </div>
                                    <textarea class="memo_txt">안녕하세요, 반갑습니다.</textarea>
                                </div>
                            </li>
                            <li>
                                <div class="memo">
                                    <div class="shortcut">
                                        <span class="ctrl_key">Ctrl +</span> <div class="ctrl_number"><span>5</span></div>
                                    </div>
                                    <textarea class="memo_txt">안녕하세요, 반갑습니다.</textarea>
                                </div>
                            </li>
                            <li>
                                <div class="memo">
                                    <div class="shortcut">
                                        <span class="ctrl_key">Ctrl +</span> <div class="ctrl_number"><span>6</span></div>
                                    </div>
                                    <textarea class="memo_txt">안녕하세요, 반갑습니다.</textarea>
                                </div>
                            </li>
                            <li>
                                <div class="memo">
                                    <div class="shortcut">
                                        <span class="ctrl_key">Ctrl +</span> <div class="ctrl_number"><span>7</span></div>
                                    </div>
                                    <textarea class="memo_txt">안녕하세요, 반갑습니다.</textarea>
                                </div>
                            </li>
                            <li>
                                <div class="memo">
                                    <div class="shortcut">
                                        <span class="ctrl_key">Ctrl +</span> <div class="ctrl_number"><span>8</span></div>
                                    </div>
                                    <textarea class="memo_txt">안녕하세요, 반갑습니다.</textarea>
                                </div>
                            </li>
                            <li>
                                <div class="memo">
                                    <div class="shortcut">
                                        <span class="ctrl_key">Ctrl +</span> <div class="ctrl_number"><span>9</span></div>
                                    </div>
                                    <textarea class="memo_txt">안녕하세요, 반갑습니다.</textarea>
                                </div>
                            </li>
                            <li>
                                <div class="memo">
                                    <div class="shortcut">
                                        <span class="ctrl_key">Ctrl +</span> <div class="ctrl_number"><span>0</span></div>
                                    </div>
                                    <textarea class="memo_txt">안녕하세요, 반갑습니다.</textarea>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="text_setup">
                        <ul>
                            <li>
                                <div class="memo">
                                    <div class="shortcut">
                                        <span class="ctrl_key">Alt +</span> <div class="alt_number"><span>1</span></div>
                                    </div>
                                    <form action="" method="post" enctype="multipart/form-data" name="">
                                        <input type="file" name="FileName">
                                    </form>
                                    <div class="memo_img">
                                        <img src="../../images/sample02.jpg">
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="memo">
                                    <div class="shortcut">
                                        <span class="ctrl_key">Alt +</span> <div class="alt_number"><span>1</span></div>
                                    </div>
                                    <form action="" method="post" enctype="multipart/form-data" name="">
                                        <input type="file" name="FileName">
                                    </form>
                                    <div class="memo_img">
                                        <img src="../../images/sample02.jpg">
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="memo">
                                    <div class="shortcut">
                                        <span class="ctrl_key">Alt +</span> <div class="alt_number"><span>1</span></div>
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
                <button class="btn purple btn_lg">저장하기</button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
  name: 'MyMessage',
  methods: {
    handleCancle () {
      this.$store.commit('cancleMyMessage')
    }
  }
}
</script>
