function solution(s) {
    const array = s.split('');
    let answer = array.sort((a, b) => {
        if (a === a.toUpperCase() && b === b.toUpperCase()) {
            return -a.localeCompare(b);
        } else if (a === a.toUpperCase() && b === b.toLowerCase()) {
            return 1;
        } else if (a === a.toLowerCase() && b === b.toUpperCase()) {
            return -1;
        } else {
            return -a.localeCompare(b);
        }
    });
    answer = answer.join('');

    return answer;
}

function solution(s) {
    return s.split('').sort().reverse().join('');
}
