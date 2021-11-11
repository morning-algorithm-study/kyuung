// NOTE 풀이 1 : 아무 생각 없이 보자마자 들었던 생각 대로 풀은 것. 지저분하고 변수명도 이상하다.
function solution(array, commands) {
    var answer = [];
    for (let i = 0; i < commands.length; i++) {
        const arr1 = array.slice(commands[i][0] - 1, commands[i][1]);
        arr1.sort(function (a, b) {
            return a - b;
        });
        const k = arr1[commands[i][2] - 1];
        answer.push(k);
    }
    return answer;
}

// NOTE 풀이 2 : 다른 사람 풀이 전체적으로 훑어본 뒤 풀은 것. 구조분해할당으로 깔끔하고 명시적으로 나타낸 부분이 좋다. 바로 return 할 수 있는 map을 사용해서 가독성이 좋다.
function solution(array, commands) {
    return commands.map(([from, to, k]) => {
        return array.slice(from - 1, to).sort((a, b) => a - b)[k - 1];
    });
}
