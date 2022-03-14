//팝업쿠키생성함수(쿠키이름을 받습니다.)
function createCookie(name){
var date= new Date();
date.setDate(date.getDate()+1);//1일

var cookie ="";
cookie+= name+"=true;";
cookie += "expires=" + date.toUTCString()+ ";";
//쿠키생성
document.cookie =cookie;
}
//쿠키확인 함수
function getCookie(name){

    var cookies = document.cookie.split("; ");
    for(var i=0; i<cookies.length; i++){
        if(cookies[i].indexOf(name) != -1){//쿠키의 이름을 반환
            return true;//존재여부를 true반환
        }
    }
}