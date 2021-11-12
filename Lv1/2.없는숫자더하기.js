// NOTE 풀이 1 : 바로 풀었던 방법. 더 좋은 방법이 있을 것 같다...
function solution(numbers) {
    const all = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = [];
    all.map((num) => {
        if (!numbers.includes(num)) {
            result.push(num);
        }
    });
    return result.reduce((acc, cur) => acc + cur);
}

// NOTE 풀이 2 : 1번에서 필요 없는 부분들을 줄였다.
function solution(numbers) {
    let result = 0;
    for (let i = 0; i < 10; i++) {
        if (!numbers.includes(i)) {
            result = result + i;
        }
    }
    return result;
}

// NOTE 풀이 3 : 다른사람의 풀이를 참고. [ 총 값 (고정) - 있는 수 = 없는 수를 더한 값 ]
function solution(numbers) {
    return 45 - numbers.reduce((acc, cur) => acc + cur);
}
