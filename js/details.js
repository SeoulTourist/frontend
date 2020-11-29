var temp = location.href.split("?");
var data = temp[1].split("=");
const contentId = data[1];
const serviceKey = "Q1rnD0P2lMbHzUSEqclxucsYKUIwcWXh%2BV48SXPuLPs7%2FxbrkIMg%2BN2HV9ELlnWxyawWxv4xQuo4BkUsFgs%2FYg%3D%3D";

function detailCommon() {
    var requestUrl = '';
    requestUrl += "http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailCommon?ServiceKey=";
    requestUrl += serviceKey;
    requestUrl += "&contentId=" + contentId;
    requestUrl += "&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&transGuideYN=Y&_type=json";

    $.ajax({
        type: "get",
        url: requestUrl,
        datatype: 'json',
        success: function (msg) {
            var item = msg.response.body.items.item;
            var common = '';
            common += '<div class="details-title">';
            common += '<h2>' + item.title + '</h2></div>';
            common += '<div class="details-main">';
            common += '<img src=' + item.firstimage + ' class="details-main-img">';
            common += '<div><ul><li><strong>우편번호</strong> : ' + item.zipcode + '</li>';
            common += '<li><strong>홈페이지</strong> : ' + item.homepage + '</li>';
            common += '<li><strong>주소</strong> : ' + item.addr1 + '</li></ul>';
            // 좋아요 버튼
            console.log('s');
            common += '<button type="button" id="like-button"><svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M91.6 13A28.7 28.7 0 0 0 51 13l-1 1-1-1A28.7 28.7 0 0 0 8.4 53.8l1 1L50 95.3l40.5-40.6 1-1a28.6 28.6 0 0 0 0-40.6z"/></svg>Like</button></div></div>';
            common += '<div class="details-info1"><h3>소개</h3>';
            common += '<p>' + item.overview + '</p></div>'
            common +=
                $(".details").append(common);
            detailInfo(item.contenttypeid);
        }
    })
}

function detailInfo(typeid) {
    var requestUrl = '';
    requestUrl += "http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailIntro?ServiceKey=";
    requestUrl += serviceKey;
    requestUrl += "&contentTypeId=" + typeid;
    requestUrl += "&contentId=" + contentId;
    requestUrl += "&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&introYN=Y&_type=json";

    $.ajax({
        type: "get",
        url: requestUrl,
        datatype: 'json',
        success: function (msg) {
            var item = msg.response.body.items.item;
            var info = '';
            info += '<div class="details-info2"><h3>이용안내</h3><div>';
            if (typeid == 12) {
                info += '<div><ul><li><strong>문의 및 안내</strong> : ' + item.infocenter + '</li>';
                if (item.restdate != undefined) {
                    info += '<li><strong>휴무일</strong> : ' + item.restdate + '</li>';
                }
                if (item.usetime != undefined) {
                    info += '<li><strong>이용시간</strong> : ' + item.usetime + '</li>';
                }
                info += '<li><strong>주차시설</strong> : ' + item.parking + '</li>';
                info += '<li><strong>유모차 대여 여부</strong> : ' + item.chkbabycarriage + '</li>';
                info += '<li><strong>애완동물 동반 가능 여부</strong> : ' + item.chkpet + '</li>';
            }
            if (typeid == 15) {
                info += '<div><ul><li><strong>문의 및 안내</strong> : ' + item.sponsor2tel + '</li>';
                info += '<li><strong>행사 시작일</strong> : ' + item.eventstartdate + '</li>';
                info += '<li><strong>행사 종료일</strong> : ' + item.eventenddate + '</li>';
                info += '<li><strong>행사장소</strong> : ' + item.eventplace + '</li>';
                info += '<li><strong>공연시간</strong> : ' + item.playtime + '</li>';
                info += '<li><strong>관람 소요시간</strong> : ' + item.spendtimefestival + '</li>';
                info += '<li><strong>관람 가능연령</strong> : ' + item.agelimit + '</li>';
                info += '<li><strong>이용요금</strong> : ' + item.usetimefestival + '</li>';
            }
            $(".details").append(info);
        }
    })
    likeBtn();
}

function likeBtn() {
    console.log('d');
    const likeBtn = document.getElementById('like-button');
    likeBtn.addEventListener('click', () => {
        likeBtn.classList.toggle('selected');
    })
}