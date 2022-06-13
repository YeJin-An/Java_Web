// 스크립트가 작성된 부분에서 코드가 실행됩니다,
// 프로그램의 흐름상 script > html 있다면
// script > 바디의 속성을 변경하거나 대상을 선택하는건데
// HTML이 만들어지기 전에 script로 작성된 코드가 실행되는겁니다.
// 이 때문에 HTML 태그들이 제대로 인식되지않는 경우가 발생

// 바디위에 작성하는것이 일반적인 코딩 위치

// 태그중에 id속성값이 id인 대상을 찾아서
// 이벤트 발생에 대한 작업을 정의
// 어떤이벤트에 대한 정의냐 ? click
// id속성값이 id인 대상을 클랙했을때 ! > 어떤행동을 할것인지도 정의
// alert : 경고창 띄우기

document.getElementById("id").addEventListener("click",
function(){
    alert("클릭1");
})
document.getElementById("id2").addEventListener("click",
function(){
    alert("클릭2");
})