// NOTE 1. 보자마자 풀었던 방법. 풀리긴 했는데 정말 이렇게 풀면 정말 안 될것 같다....
function solution(s) {
    let answer = s;
    while (isNaN(Number(answer))) {
        answer.includes('zero')
            ? (answer = answer.replace('zero', 0))
            : (answer = answer);
        answer.includes('one')
            ? (answer = answer.replace('one', 1))
            : (answer = answer);
        answer.includes('two')
            ? (answer = answer.replace('two', 2))
            : (answer = answer);
        answer.includes('three')
            ? (answer = answer.replace('three', 3))
            : (answer = answer);
        answer.includes('four')
            ? (answer = answer.replace('four', 4))
            : (answer = answer);
        answer.includes('five')
            ? (answer = answer.replace('five', 5))
            : (answer = answer);
        answer.includes('six')
            ? (answer = answer.replace('six', 6))
            : (answer = answer);
        answer.includes('seven')
            ? (answer = answer.replace('seven', 7))
            : (answer = answer);
        answer.includes('eight')
            ? (answer = answer.replace('eight', 8))
            : (answer = answer);
        answer.includes('nine')
            ? (answer = answer.replace('nine', 9))
            : (answer = answer);
    }
    return Number(answer);
}

// NOTE 2: 다른사람 풀이 참고 : 처음에 풀었던 방법에서 불필요한 부분들을 줄였다
function solution(s) {
    while (isNaN(+s)) {
        s = s.replace('zero', 0);
        s = s.replace('one', 1);
        s = s.replace('two', 2);
        s = s.replace('three', 3);
        s = s.replace('four', 4);
        s = s.replace('five', 5);
        s = s.replace('six', 6);
        s = s.replace('seven', 7);
        s = s.replace('eight', 8);
        s = s.replace('nine', 9);
    }
    return Number(s);
}

// NOTE 3: 같은 방법에서의 정규식
