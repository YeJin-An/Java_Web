console.log("hello world");
console.log("한글테스트");

// 카멜표기법.  소문자로 시작.  연결된단어의 첫글자마다 대문자를 붙여줌.
// 자바스크립트에서는 값이 변수에 대입될때 데이터타입이 쟁해진다.
// 컴파일언어가 아니라 인터프리터 언어기때문에 한줄한줗 그때 실행한다.
// my_age  my_brother
var myAge = 5;
let brotherAge = 20;
// console.log(myAge+brotherAge);
// console.log(15); //하드코딩. 이 경우 밖에 못쓴다. 유연성이 없다.

let a = null;
let b;
let c = true;
let d = 15;
let e = "십육";

console.log(typeof a); //object. null이 아니라 object로 나오고있다. 
// 명시적('내용이나 뜻을 분명하게 드러내)으로 할당하는 것
console.log(typeof b); //undefined
console.log(typeof c); //boolean
console.log(typeof d); //number
console.log(typeof e); //string(문자열)

let one =-17.4;
console.log(typeof one);

// 문자열과 숫자를 더하게 되면 문자열로 합쳐진다.
// NaN a = Not a Number // 숫자가 아니라서 연산을 할 수 없다.

let two = "g" + -13.2;
console.log(two);
console.log(typeof two);

let x = 123;
let y = "456";
love = y + 100;
love2 = y + x ;
let z = love + 500;


console.log(x+100); // 223
console.log(y+100); //456100 문자열인데 숫자로만 이뤄져있다.
console.log(z); //456100500

console.log(15+15.55);
console.log(15-4.5);
console.log(15/4.5); 3.3333333333333335
console.log(15*4.5);

// 부동소수점
// bit = 0과 1을 표현
// 1비트로 나타낼 수 있는 경우의 수 = 2개
// 4bit로 나타낼수 있는 경우의수 = 16개
// 변수하나의 32bit를 쓸수있다고 치자.
// 여기에 숫자를 담아야되는데 
// 30이라는 숫자는 어떻게 담을까?
//     사람은 10진수를 쓰고있기 때문에 30
//     컴퓨터는 2진수를 쓰고있기 때문에 11110
// 30.258이라는 숫자를 어떻게 담을까?

//부동소수점
let realx = 3.0;
let realY = 5.0;
console.log((realx/realY)+0.4);  //0.6
//변수의 선언
// let 변수명;       //변수의 선언
// 변수명 = 값;      //값 할당
// let 변수명2 = 값;  //초기화.  초기값을 세팅해준다.

//조건문
if(x > 100){
    console.log("x는 100보다 큽니다.");
}else{
    conaole.log("x는 100보다 작습니다.");
}

// 실습1.
// mydata라는 변수를 선언하고
// 그 변수의 타입이 문자열이면 해당변수는 문자열입니다.
// 라고 콘솔에 표현하고,
// 숫자면 숫자입니다. 를 표현하고
// 나머지며 나머지입니다.를 표현해보세요.a

// => 문제를 쪼개야된다.
// 1. 변수초기하(선언과 값 할당)
// 2. 변수의 데이터타입 추출해보기
// 3. 추출한 데이터타입의 분기처리

let mydata = "안녕";
let type = typeof mydata;
if(typeof mydata === "string"){
    console.log("해당변수는 문자열 입니다.")
}else if(typeof mydata === "number"){
    console.log("해당변수는 숫자입니다.")
}else{
    console.log("해당변수는 나머지입니다.")
}

let num = 100;
// num **=2;
let result = num % 3;
console.log(num);
console.log(result);


// 숫자가 담긴 변수를 주면
// 그 숫자가 짝수인지 홀수인지 판별해서 콘솔로 출력해보세요.

let number = 1003;

if(number % 2 == 0){
    console.log("해당변수는 짝수입니다.")
}else{
    console.log("해당변수는 홀수입니다.")
}

// 4의 배수인지 아닌지를 구별해보세요.
let number1 = 333;
if(number1 %2 == 0 && number1 %4 == 0){
    console.log("해당변수는 4의 배수입니다.");
}else{
    console.log("해당변수는 4의 배수가 아닙니다.");
}

number1 += 1;
console.log(number1++); // 334 변수의 값을 활용한 다음 증가
console.log(++number1); // 336 증가한 다음 값을 활용
console.log(number1);   // 336

let fNum = 35;
if(fNum % 5 == 0 && fNum < 100){
    console.log("fNum은 5의배수이며 100이하");
}

// 변수가 3또는 5의 배수, 단 15의 배수는 아닐때만
// 내가 찾는 수 라고 콘솔에 표현

let dNum = 15;
if(dNum % 3 == 0 || dNum % 5 == 0){
    if(dNum % 15 != 0){
        console.log("내가 찾는 수")
    }else{
        console.log("내가 찾는 수가 아닙니다.")
    }
}else{
    console.log("해당변수는 3의배수도 아니고, 5의배수도 아닙니다.")
}

debugger;
let dNum1 = 16;
if((dNum1 % 3 ==0 || dNum1 % 5 == 0) && ! dNum1 % 15 == 0){
    console.log("내가 찾는 수");
}else{
    console.log("그 외");
}

let g = 5;
let h = g-- + 2 + --g;    // 5 + 2 + 3
// let h = ++g + g++ + g; // 6 + 6 + 7
console.log("h : ",h);


let hhh = 0;
if(hhh-- < 0){  // 비교연산자보다 증감연산자가 먼저
                // 구글링해보니 비교연산자10, 후위증감 16
    console.log("hhh는 현재 음수");
    console.log("현재 hhh값 : ",hhh);
}else if(hhh == 0){
    console.log('hhh는 현재 0');
    console.log("현재 hhh값 : ",hhh);
}else{
    console.log('hhh는 현재 양수');
    console.log("현재 hhh값 : ",hhh);
}


