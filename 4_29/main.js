//첫번째 문제
//if else, prempt를 사용해서
//입력받은 시간이 오전인진 오후인지
// 구분하는 코드
let time = prompt("시간을 입력하세요");

let score = Number(prompt('학점을 입력하시오', '학점'));
if (score == 4.5) {
    alert("신");
} else if (4.0 <= score) {
    alert('교수님');
} else if (3.0 <= score) {
    alert('인간');
} else if (2.0 <= score) {
    alert('돌고래');
} else if (1.0 <= score) {
    alert('플랑크톤');
} else {
    alert('4.5보다 크거나 1.0보다 작음');
}

for (let i = 0; i < 10; i++) {
    console.log('${i}번 반복');
}