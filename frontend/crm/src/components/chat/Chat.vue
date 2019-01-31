<template>
  <!-- <div class="chat"> -->
    <div class="contents">
        <div class="row">
            <div class="col col-3">
                <div class="row">
                    <div class="col col-12 shadow list">
                        <div class="col_header">
                            <h2>채팅 목록</h2>
                            <span class="meta_menu delete"><a href="#">전체 삭제</a></span>
                        </div>
                        <div class="col_body chat_list">
                            <ul>
                                <li class="active">
                                    <div class="list_item">
                                        <div class="list_top">
                                            <div class="thumb">
                                                <div class="thumb_img">
                                                    <img src="../../images/sp_mh.png">
                                                </div>
                                                <span class="icon_sns kt"></span>
                                            </div>
                                            <div class="name_wrap">
                                                <div class="nickname"><span>(카톡) </span>고객 닉네임</div>
                                                <div class="date">오후 2:20</div>
                                            </div>
                                            <div class="icon_more">
                                                <a href="#">
                                                <img src="../../images/icon_more_h.png">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="list_md">
                                            <div class="talk_desc">블랙리스트 풀어주세요.</div>
                                        </div>
                                        <div class="list_bt">
                                            <span class="badge before">기존 2회</span><span class="badge book">예약중</span><span class="badge black_list">black</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="list_item">
                                        <div class="list_top">
                                            <div class="thumb">
                                                <div class="thumb_img">
                                                    <img src="../../images/thumb_default.png">
                                                </div>
                                                <span class="icon_sns kt"></span>
                                            </div>
                                            <div class="name_wrap">
                                                <div class="nickname"><span>(카톡) </span>닉네임</div>
                                                <div class="date">어제</div>
                                            </div>
                                            <div class="icon_more">
                                                <a href="#">
                                                    <img src="../../images/icon_more_h.png">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="list_md">
                                            <div class="talk_desc">안녕하세요. </div>
                                            <span class="new_count">6</span>
                                        </div>
                                        <div class="list_bt">
                                            <span class="badge black_list">black</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="list_item">
                                        <div class="list_top">
                                            <div class="thumb">
                                                <div class="thumb_img">
                                                    <img src="../../images/thumb_default.png">
                                                </div>
                                                <span class="icon_sns kt"></span>
                                            </div>
                                            <div class="name_wrap">
                                                <div class="nickname"><span>(카톡) </span>고객쓰</div>
                                                <div class="date">1월 16일</div>
                                            </div>
                                            <div class="icon_more">
                                                <a href="#">
                                                    <img src="../../images/icon_more_h.png">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="list_md">
                                            <div class="talk_desc">안녕하세요. </div>
                                            <span class="new_count">6</span>
                                        </div>
                                        <div class="list_bt">

                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="list_item">
                                        <div class="list_top">
                                            <div class="thumb">
                                                <div class="thumb_img">
                                                    <img src="../../images/thumb_default.png">
                                                </div>
                                                <span class="icon_sns kt"></span>
                                            </div>
                                            <div class="name_wrap">
                                                <div class="nickname"><span>(카톡) </span>손님</div>
                                                <div class="date">1월 15일</div>
                                            </div>
                                            <div class="icon_more">
                                                <a href="#">
                                                    <img src="../../images/icon_more_h.png">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="list_md">
                                            <div class="talk_desc">안녕하세요. 커리큘럼 커리큘럼 커리큘럼</div>
                                        </div>
                                        <div class="list_bt">
                                            <span class="badge before">기존 2회</span><span class="badge book">예약중</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="list_item">
                                        <div class="list_top">
                                            <div class="thumb">
                                                <div class="thumb_img">
                                                    <img src="../../images/thumb_default.png">
                                                </div>
                                                <span class="icon_sns kt"></span>
                                            </div>
                                            <div class="name_wrap">
                                                <div class="nickname"><span>(카톡) </span>고객 닉네임</div>
                                                <div class="date">2018.12.30</div>
                                            </div>
                                            <div class="icon_more">
                                                <a href="#">
                                                    <img src="../../images/icon_more_h.png">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="list_md">
                                            <div class="talk_desc">안녕하세요를레이히 </div>
                                        </div>
                                        <div class="list_bt">

                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="list_item">
                                        <div class="list_top">
                                            <div class="thumb">
                                                <div class="thumb_img">
                                                    <img src="../../images/sp_mh.png">
                                                </div>
                                                <span class="icon_sns kt"></span>
                                            </div>
                                            <div class="name_wrap">
                                                <div class="nickname"><span>(카톡) </span>고객 닉네임</div>
                                                <div class="date">2018.12.30</div>
                                            </div>
                                            <div class="icon_more">
                                                <a href="#">
                                                    <img src="../../images/icon_more_h.png">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="list_md">
                                            <div class="talk_desc">안녕하세요. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사랑 대한으로 길이 보전하세.</div>
                                        </div>
                                        <div class="list_bt">
                                            <span class="badge before">기존 2회</span><span class="badge book">예약중</span><span class="badge black_list">black</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
                <div class="col col-9 chat_member">
                    <div class="row">
                        <div class="col col-5 chatting">
                            <div class="col_header">
                                <div class="chatting_header">
                                    <div class="thumb">
                                        <div class="thumb_img">
                                            <img src="../../images/sp_mh.png">
                                        </div>
                                        <span class="icon_sns kt"></span>
                                    </div>
                                    <h2>(카톡) 고객 닉네임 <span class="badge before">기존 2회</span><span class="badge book">예약중</span><span class="badge black_list">black</span></h2>
                                    <div class="icon_more">
                                        <a href="#">
                                            <img src="../../images/icon_more_h.png">
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col_body">
                                <div class="memo_section">
                                    <div class="memo">
                                        1. 아이디 Curriculam 에서 AppleDoor로 변경되었음<br>
                                        2. 2018. 12. 28 김뫄뫄 직원 1회<br>
                                        3. 2019. 01. 05 김뫄뫄 직원 1회<br>
                                        4. 2019. 01. 07 블랙리스트 추가<br>
                                        5. 2018. 12. 28 김뫄뫄 직원 1회<br>
                                        6. 2019. 01. 05 김뫄뫄 직원 1회<br>
                                        7. 2019. 01. 07 블랙리스트 추가
                                    </div>
                                    <input type="text" placeholder="메모를 입력하세요.">
                                </div>
                                <div class="chatting_section">
                                    <div class="message_wrap">
                                        <div class="msg_txt your_log">
                                            <span>안녕하세요. 동해물과 백두산이 마르고</span>
                                        </div>
                                        <div class="aside">오전 10:30</div>
                                    </div>
                                    <div class="message_wrap">
                                        <div class="msg_txt my_log">
                                            <span>안녕하세요. 동해물과 백두산이 마르고 안녕하세요. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세. 무궁화 삼천리 화려강산, 대한 사람 대한으로 길이 보전하세. 남산 위에 저 소나무 철갑을 두른 듯. </span>
                                        </div>
                                        <div class="aside">오전 10:30</div>
                                    </div>
                                    <div class="chatting_wrap">
                                        <div class="write">
                                            <textarea placeholder="보낼 메시지를 입력해 주세요."></textarea>
                                        </div>
                                        <button class="chat_submit">보내기</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col col-7 member">
                            <div class="col_header center">
                                <h2>직원 정보</h2>
                            </div>
                            <div class="row">
                                <div class="col col-6 chat_member_info">
                                    <div class="chat_profile">
                                        <div class="profile">
                                            <div class="name">김직원</div>
                                            <div class="locate">25살 여, 부산 서면 롯데백화점</div>
                                            <div class="sns">
                                                <div class="sns_item kakao">
                                                    <img src="../../images/profile_kt.png"><span class="sns_id kt_id">kakaoid</span>
                                                </div>
                                                <div class="sns_item line">
                                                    <img src="../../images/profile_line.png"><span class="sns_id kt_id">lineid</span>
                                                </div>
                                                <div class="sns_item tele">
                                                    <img src="../../images/profile_tele.png"><span class="sns_id kt_id">teleid</span>
                                                </div>
                                            </div>
                                            <div class="priv_memo">
                                                <div class="memo">
                                                    <div class="shortcut">
                                                        <span class="ctrl_key">Ctrl +</span> <div class="ctrl_number"><span>1</span></div>
                                                    </div>
                                                    <div class="memo_txt">
                                                        안녕하세요, 반갑습니다.
                                                    </div>
                                                </div>
                                                <div class="memo">
                                                    <div class="shortcut">
                                                        <span class="ctrl_key">Ctrl +</span> <div class="ctrl_number"><span>2</span></div>
                                                    </div>
                                                    <div class="memo_txt">
                                                        어쩌면 누군가를 사랑하는 것보다 더 어려운 게 나 자신을 사랑하는 것.
                                                    </div>
                                                </div>
                                                <div class="memo">
                                                    <div class="shortcut">
                                                        <span class="ctrl_key">Ctrl +</span> <div class="ctrl_number"><span>3</span></div>
                                                    </div>
                                                    <div class="memo_txt">
                                                        차가운 밤의 시선 초라한 날 감추려 몹시 뒤척였지만, 저 수많은 별을 맞기 위해 난 떨어졌던가. 저 수천개의 찬란한 화살.
                                                    </div>
                                                </div>
                                                <div class="memo">
                                                    <div class="shortcut">
                                                        <span class="ctrl_key">Ctrl +</span> <div class="ctrl_number"><span>4</span></div>
                                                    </div>
                                                    <div class="memo_txt">
                                                        안녕하세요, 반갑습니다.
                                                    </div>
                                                </div>
                                                <div class="memo">
                                                    <div class="shortcut">
                                                        <span class="ctrl_key">Ctrl +</span> <div class="ctrl_number"><span>5</span></div>
                                                    </div>
                                                    <div class="memo_txt">
                                                        어쩌면 누군가를 사랑하는 것보다 더 어려운 게 나 자신을 사랑하는 것.
                                                    </div>
                                                </div>
                                                <div class="memo">
                                                    <div class="shortcut">
                                                        <span class="ctrl_key">Ctrl +</span> <div class="ctrl_number"><span>6</span></div>
                                                    </div>
                                                    <div class="memo_txt">
                                                        차가운 밤의 시선 초라한 날 감추려 몹시 뒤척였지만, 저 수많은 별을 맞기 위해 난 떨어졌던가. 저 수천개의 찬란한 화살.
                                                    </div>
                                                </div>
                                                <div class="memo">
                                                    <div class="shortcut">
                                                        <span class="ctrl_key">Ctrl +</span> <div class="ctrl_number"><span>7</span></div>
                                                    </div>
                                                    <div class="memo_txt">
                                                        안녕하세요, 반갑습니다.
                                                    </div>
                                                </div>
                                                <div class="memo">
                                                    <div class="shortcut">
                                                        <span class="ctrl_key">Ctrl +</span> <div class="ctrl_number"><span>8</span></div>
                                                    </div>
                                                    <div class="memo_txt">
                                                        어쩌면 누군가를 사랑하는 것보다 더 어려운 게 나 자신을 사랑하는 것.
                                                    </div>
                                                </div>
                                                <div class="memo">
                                                    <div class="shortcut">
                                                        <span class="ctrl_key">Ctrl +</span> <div class="ctrl_number"><span>9</span></div>
                                                    </div>
                                                    <div class="memo_txt">
                                                        차가운 밤의 시선 초라한 날 감추려 몹시 뒤척였지만, 저 수많은 별을 맞기 위해 난 떨어졌던가. 저 수천개의 찬란한 화살.
                                                    </div>
                                                </div>
                                                <div class="memo">
                                                    <div class="shortcut">
                                                        <span class="ctrl_key">Ctrl +</span> <div class="ctrl_number"><span>0</span></div>
                                                    </div>
                                                    <div class="memo_txt">
                                                        차가운 밤의 시선 초라한 날 감추려 몹시 뒤척였지만, 저 수많은 별을 맞기 위해 난 떨어졌던가. 저 수천개의 찬란한 화살.
                                                    </div>
                                                </div>
                                                <div class="memo">
                                                    <div class="row">
                                                        <div class="col col-4">
                                                            <div class="shortcut">
                                                                <span class="ctrl_key">Alt +</span> <div class="alt_number"><span>1</span></div>
                                                            </div>
                                                            <div class="memo_img">
                                                                <img src="../../images/sample02.jpg">
                                                            </div>
                                                        </div>
                                                        <div class="col col-4">
                                                            <div class="shortcut">
                                                                <span class="ctrl_key">Alt +</span> <div class="alt_number"><span>2</span></div>
                                                            </div>
                                                            <div class="memo_img">
                                                                <img src="../../images/sample02.jpg">
                                                            </div>
                                                        </div>
                                                        <div class="col col-4">
                                                            <div class="shortcut">
                                                                <span class="ctrl_key">Alt +</span> <div class="alt_number"><span>3</span></div>
                                                            </div>
                                                            <div class="memo_img">
                                                                <img src="../../images/sample02.jpg">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col col-6 schedule_info">스케줄표</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'Chat',
  data () {
    return {
    //   msg2: 'hi!'
    }
  }
}
</script>
