function solution(s) {
    let answer = '';
    const newArray = s.split(' ');
    newArray.map((word, idx) => {
        for (let i = 0; i < word.length; i++) {
            if (i % 2 === 0) {
                answer = answer + word[i].toUpperCase();
            } else {
                answer = answer + word[i].toLowerCase();
            }
        }
        answer = answer + ' ';
    });
    if (answer.length !== s.length) {
        answer = answer.substr(0, answer.length - 1);
    }
    return answer;
}
