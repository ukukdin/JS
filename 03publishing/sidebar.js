//사이드 js
//선택자 2개 window.onload (페이지에서 1개만 사용가능)
// 선택지 2개 - js 코드를 아래쪽에 삽입

window.onload=function(){
    var menuBtn = document.querySelector(".menuBtn");
    //console.log(menuBtn)//null 값이 나오는 이유는: js파일을 분리하게되면 window.onload를 실행
    menuBtn.addEventListener("click",onSidenav)


}   

function onSidenav(){
      var side = document.querySelector(".side");

      if(side.style.width =='200px'){
          side.style.width='0px';

      }else{
          side.style.width='200px';
      }
     
console.log(side)
}