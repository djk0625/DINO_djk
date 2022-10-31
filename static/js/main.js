main.js

const currentPage = window.location.href;

const list = ["home", "API", "list", "collection", "mypage"];
const selectedColor = "#04b7cc";
for (let i = 0; i < 5; i++) {
  if (currentPage.toString().includes(list[i])) {
    const targetText = document.getElementsByClassName(list[i])[0];
    targetText.style.color = selectedColor;
  }
}

// mypage jQuery
$(".img-setting-inner input[type=file]").on("change", function () {
  var fileName = $(this).val();
  $(this).next().val(fileName);
});

// 취소 버튼 클릭
function cancel(){
     // const element = document.getElementById('popup_cancel');
     //
     // element.innerText = '';
     $("#text1").val("");
     $("#text2").val("");
     $("#bill1").val("");
     $("#bill2").val("");
     $("#bill3").val("");
     $("#bill4").val("");
     $("#bill5").val("");
     $("#bill6").val("");
     $("#bill7").val("");
     $("#bill8").val("");
     $("#opt1").val("");
     $("#opt2").val("");
     $("#opt3").val("");
     $("#opt4").val("");
     $("#opt5").val("");
     $("#opt6").val("");
     $("#opt7").val("");
     $("#opt8").val("");
     $("#bill0").val("");
     $("#word1").val("");
     $("#word2").val("");

     document.getElementById("selectAll").checked = false;
     document.getElementById("chk1").checked = false;
     document.getElementById("chk2").checked = false;
     document.getElementById("chk3").checked = false;
     document.getElementById("chk4").checked = false;
     document.getElementById("chk5").checked = false;
     document.getElementById("chk6").checked = false;
     document.getElementById("chk7").checked = false;
     document.getElementById("chk8").checked = false;
 }

 // 체크박스 해제
 function checkBtn(){
    document.getElementById("video_upload").checked = false;
    document.getElementById("mute").checked = false;
 }

 // 상세 페이지 취소 버튼 클릭
 function detailPage(){
    document.getElementById("video_upload").checked = false;
    document.getElementById("mute").checked = false;
 }

 // 상품 옵션 X 버튼 클릭
  function detailProductPage(){
    $("#text1").val("");
     $("#text2").val("");
     $("#bill1").val("");
     $("#bill2").val("");
     $("#bill3").val("");
     $("#bill4").val("");
     $("#bill5").val("");
     $("#bill6").val("");
     $("#bill7").val("");
     $("#bill8").val("");
     $("#opt1").val("");
     $("#opt2").val("");
     $("#opt3").val("");
     $("#opt4").val("");
     $("#opt5").val("");
     $("#opt6").val("");
     $("#opt7").val("");
     $("#opt8").val("");
     $("#bill0").val("");
     $("#word1").val("");
     $("#word2").val("");

     document.getElementById("selectAll").checked = false;
     document.getElementById("chk1").checked = false;
     document.getElementById("chk2").checked = false;
     document.getElementById("chk3").checked = false;
     document.getElementById("chk4").checked = false;
     document.getElementById("chk5").checked = false;
     document.getElementById("chk6").checked = false;
     document.getElementById("chk7").checked = false;
     document.getElementById("chk8").checked = false;
 }

 // 커스텀 설정 변경 취소 버튼 클릭
 function cancelCustom(){
    $("#textF1").val("");
    $("#textF2").val("");
    $("#textF3").val("");
    $("#textF4").val("");
    $("#textF5").val("");
    $("#textF6").val("");
    $("#textF7").val("");
    $("#textF8").val("");
    $("#textF9").val("");
    $("#textF10").val("");
    $("#textF11").val("");
    $("#textF12").val("");
    $("#textF13").val("");
    $("#textF14").val("");
    $("#textF15").val("");
    $("#textF16").val("");
    $("#textF17").val("");
    $("#textF18").val("");
    $("#textF19").val("");
    $("#textF20").val("");
 }

 // 커스텀 설정 변경 창 X 버튼 클릭
 function closeCustom() {
    $("#textF1").val("");
    $("#textF2").val("");
    $("#textF3").val("");
    $("#textF4").val("");
    $("#textF5").val("");
    $("#textF6").val("");
    $("#textF7").val("");
    $("#textF8").val("");
    $("#textF9").val("");
    $("#textF10").val("");
    $("#textF11").val("");
    $("#textF12").val("");
    $("#textF13").val("");
    $("#textF14").val("");
    $("#textF15").val("");
    $("#textF16").val("");
    $("#textF17").val("");
    $("#textF18").val("");
    $("#textF19").val("");
    $("#textF20").val("");
 }