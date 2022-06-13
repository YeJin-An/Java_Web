

// 변수 3개가 있을때
// 그중에 가장 큰수를 출력해보세요.
// 한글로 어떻게 코딩을 할지 먼저 설계.
// 그 한글을 코드로 바꾸면된다.

let large = 100;
let middle = 50;
let small = -40 ;

let object = {
    0: 100,
    1: 50,
    2: -40,
}

// 가장 큰수를 알아내기 위해 비교를 3번을 사용해야 한다.
// 비교를 하는데, 최소 3회 실시해야 한다.
// 조건을 3개정도 사용해야 한다.




// 위의 3개변수의 평균값을 구해보세요.
let avg = (large + middle + small)/3;
console.log(avg);


// let month 에는 1월 12월까지가 들어올거다.
// 들어온 월에 해당하는 계절을 출력해보세요.
let month = 5;

// 3,4,5   6,7,8   9,10,11   12,1,2
if(month = 12 && 0< month < 3){console.log("겨울");}
else if(9 <= month <= 11 ){console.log("가을");}
else if(6 <= month <= 8){console.log("여름");}
else if (3 <= month <= 5){console.log("봄");}
else{console.log("날짜 월을 잘못 입력하였습니다.")}


//형변환 = 데이터타입을 변환
let weight = 70.30;
console.log(weight);
//정수부만 뽐으려고 하면 어떻게할까?
console.log(Math.trunc(weight)); // floor(), ceil(), round()


//문자열을 변수로 줄건데 그 문자열의 기이가 10이 넘으면 길다.
// 5~10사이면 보통
// 0~4사이면 짧다.
// 라고 표현해보세요.
let sentence = 'abcde';

if(sentence.length>10){
    console.log('길다');
}else if(5<= sentence.length <=10){
    console.log('보통');
}else if(5<= sentence.length <=10){
    console.log("잛다");
}else{
    console.log("범위에 해당하지 않습니다.");
}

//조건문
// 1. 삼항  2. if  3.switch
let con = 5 % 2;
console.log(con==1? '홀수' : '짝수');
//응용. 타입이 number인지 그외인지 삼항연산자로 판별
console.log(typeof con == "number"? "Number" : "그외");

//3. switch
let sum = '미';
switch(sum){
    case '수':
        console.log("90점 이상입니다.");
        break;  //더이상 다른 case문을 실행시키지 않음.
    case '우':
        console.log("80점 이상입니다.");
        break;
    case '미':
        console.log("70점 이상입니다.");
        break;
    case '양':
        console.log("60점 이상입니다.");
        break;
    case '가':
        console.log("50점 이상입니다.");
        break;
} // break문이 없는 경우 case에 해당되는 값 아래 모두 출력!!


let Sum = '수';
function isInt(Sum){
    return sum % 1 === 0 ; 
}

// 점수를 입력받고 90점이상이면 '수'를 출력
// 50점 이상이면 '가'를 출력
// ...
// 80점 이상이면 '우'를 출력
// 90점 이상이면 '수'를 출력

let score = 82;
let scoreTen = parseInt(score/10);

switch(scoreTen){
    case 9:
        console.log("수");
        break;
    case 8:
        console.log("우");
        break;
    case 7:
        console.log("미");
        break;
    case 6:
        console.log("양");
        break;
    case 5:
        console.log("가");
        break;
}
