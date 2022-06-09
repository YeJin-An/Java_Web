//반복문
// 1. for  2. while  3. do-while

for(let i=3; i>0; i--){
    process.stdout.write(""+i+" ");
}
console.log("반복문 끝");

// i가 3일때 0보다 크기 때문에 3찍힘
// i-- 실행
// i가 2가되었고 0보다 크기 때문에 2찍힘
// i-- 실행
// i가 2가되었고 0보다 크기 때문에 1찍힘
// i-- 실행
// i가 2가되었고 0보다 크기 않기 때문에 반복문 나감.

// 1부터 100까지 콘솔에 찍어보세요.
for(let i=1; i<100; i++){
    process.stdout.write(""+i+" ");
}

console.log(" ");

//1부터 100가지중 짝수만 찍어보세요
for(let i=1; i<100; i++){
    if(i % 2 == 0){
        process.stdout.write(""+i+" ");
    }
}

// 첫째변수와 두번째변수 사이의 모든 정수를 찍어보세요.
console.log(" ");
let first = 10;
let second = 30;
for(let i=first; i<=second; i++){
    process.stdout.write("" + i + " ");
}

// 구구단 3단을 출력해보세요.
// 단, 형태는  3 * 1 = 3
//            3 * 2 = 6
//              ...
//            3 * 9 = 27
// 이런식
// 내가 필요한데이터나 조작해야될 데이터가
// 결과값을 뽑아낼대 단,x 증가하는수 가 필요한데 둘다 알고있으니까 필요한거 없다.

console.log(" ");
for(let i=3; i<4; i++){
    for(let j=1; j<10; j++){
        process.stdout.write(""+ i +"*" + j + "=" + i*j + " ");
    }
}
console.log(" ");
for(let i=1; i<=9; i++){
    process.stdout.write(""+ 3 +"*" + i + "=" + 3*i+' ');
    //템플릿 리터럴. 문자열 속에서 변수의 값을 자동으로 추출하는 방법.
    process.stdout.write(`3*${i}=${3*i} `);
}

// 1부터 100까지의 총합을 출력해보세요.
let sum = 0;
for(let i=1; i<101; i++){sum += i;}
console.log(" ")
process.stdout.write("" + "1부터 100까지의 총합은 : " + sum+" ");

// const PI = 3.14;
// x = 200;
// console.log(x);

// 1부터 100까지중 5의 배수만 출력해보세요.
console.log(" ");
for(let i = 1; i < 101; i++){
    if(i % 5 == 0){
        process.stdout.write(""+i+ " ");
    }
}

// 1부터 100가지중 15의 배수가 몇개있는 출력해보세요.
console.log("");
let arr = [];
for(let i =0; i<101; i++){
    if(i % 15 == 0){let count =  arr.push(i);}
}
console.log(arr.length);