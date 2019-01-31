<template>
  <!-- <div class="member"> -->
    <div class="contents">
        <div class="row">
            <div class="col col-3">
                <div class="row">
                    <div class="col col-12 shadow list">
                        <div class="col_header">
                            <h2>직원 목록</h2>
                            <span class="meta_menu add_member"><button class="btn purple rounded">직원 추가</button></span>
                        </div>
                        <div class="col_body member_list">
                            <div class="search">
                                <input type="text" placeholder="직원 검색하기">
                            </div>
                            <ul>
                                <li class="active">
                                    <div class="list_item">
                                        <div class="list_top">
                                            <div class="thumb">
                                                <div class="thumb_img">
                                                    <img src="../../images/sp_mh.png">
                                                </div>
                                            </div>
                                            <div class="name_wrap">
                                                <div class="name">이민혁</div>
                                                <div class="working"></div>
                                                <div class="desc">25살, 남자, 서울시 강남구 머머동</div>
                                            </div>
                                            <div class="icon_more">
                                                <a href="#">
                                                <img src="../../images/icon_more_h.png">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col col-9 add_form">
                <div class="col_header center">
                    <h2>직원 추가하기</h2>
                    <span class="meta_menu add_member"><button class="btn purple rounded">전체 저장</button></span>
                </div>
                <div class="row">
                    <div class="col col-4 form">
                        <h3>직원 기본 정보 입력하기</h3>
                        <form>

                            <div class="input_title">이름 <span>(필수)</span></div>
                            <div class="input_content"><input type="text" placeholder="이름을 입력해 주세요."></div>

                            <div class="input_title">나이 <span>(필수)</span></div>
                            <div class="input_content">
                                <select>
                                    <option selected>나이를 선택해 주세요</option>
                                    <option>40살</option>
                                    <option>41살</option>
                                    <option>42살</option>
                                </select>
                            </div>

                            <div class="input_title">성별 <span>(필수)</span></div>
                            <div class="input_content">
                                <div class="multi_chk">
                                    <div class="split">
                                        <p class="radio">
                                            <input type="radio" name="r01" id="r011"> <label for="r011"><span></span>여자</label>
                                        </p>
                                    </div>
                                    <div class="split">
                                        <p class="radio">
                                            <input type="radio" name="r01" id="r012"> <label for="r012"><span></span>남자</label>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="input_title">텔레그램 ID <span>(필수)</span></div>
                            <div class="input_content"><input type="text" placeholder="텔레그램 ID를 입력해 주세요."></div>

                            <div class="input_title">카카오톡 ID</div>
                            <div class="input_content"><input type="text" placeholder="카카오톡 ID를 입력해 주세요."></div>

                            <div class="input_title">라인 ID</div>
                            <div class="input_content"><input type="text" placeholder="라인 ID를 입력해 주세요."></div>

                            <div class="input_title">위치 <span>(필수)</span></div>
                            <div class="input_content"><input type="text" placeholder="위치를 설정해 주세요."></div>

                        </form>
                        <h3>개인 메시지 설정</h3>
                        <form>
                            <div class="input_content">
                                <button class="btn purple full" id="msgSetup">개인 메시지 설정하기</button>
                            </div>
                            <div class="input_content">
                                <div class="long_row_chk">
                                    <p class="check">
                                        <input type="checkbox" id="c011"> <label for="c011"><span></span>Ctrl + 1을 Auto Message로 설정</label>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col col-4 talk">
                        <h3>톡 종류 <span class="meta_menu add_btn"><button class="btn purple rounded">+</button></span></h3>
                        <div class="talk_list">
                            <ul>
                                <li class="active">
                                    <div class="list_sns kt">
                                        <img src="../../images/list_kt.png">
                                    </div>
                                    <div class="sns_nick"><span>(카카오톡)</span> <span>사과</span></div>
                                    <div class="icon_next">
                                        <img src="../../images/icon_next.png">
                                    </div>
                                </li>
                                <li>
                                    <div class="list_sns line">
                                        <img src="../../images/list_line.png">
                                    </div>
                                    <div class="sns_nick"><span>(라인)</span> <span>바나나</span></div>
                                    <div class="icon_next">
                                        <img src="../../images/icon_next.png">
                                    </div>
                                </li>
                                <li>
                                    <div class="list_sns tele">
                                        <img src="../../images/list_tele.png">
                                    </div>
                                    <div class="sns_nick"><span>(텔레그램)</span> <span>딸기</span></div>
                                    <div class="icon_next">
                                        <img src="../../images/icon_next.png">
                                    </div>
                                </li>
                                <li>
                                    <div class="list_sns band">
                                        <img src="../../images/list_band.png">
                                    </div>
                                    <div class="sns_nick"><span>(밴드)</span> <span>토마토</span></div>
                                    <div class="icon_next">
                                        <img src="../../images/icon_next.png">
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div class="col col-4 talk_form">
                        <h3>톡 정보 수정</h3>
                        <form>

                            <div class="input_title">톡 종류</div>
                            <div class="input_content">
                                <select>
                                    <option selected>톡 종류를 선택해 주세요.</option>
                                    <option>텔레그램</option>
                                    <option>카카오톡</option>
                                    <option>라인</option>
                                </select>
                            </div>

                            <div class="input_title">닉네임</div>
                            <div class="input_content"><input type="text" placeholder="닉네임을 입력해 주세요."></div>

                            <div class="input_title">나이</div>
                            <div class="input_content">
                                <select>
                                    <option selected>나이를 선택해 주세요</option>
                                    <option>40살</option>
                                    <option>41살</option>
                                    <option>42살</option>
                                </select>
                            </div>

                            <div class="input_title">카카오톡 ID</div>
                            <div class="input_content"><input type="text" placeholder="카카오톡 ID를 입력해 주세요."></div>

                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'Member',
  data () {
    return {
    //   msg2: 'hi!'
    }
  }
}
</script>
