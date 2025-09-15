function solution(s) {
    const words = [
    'zero', 'one', 'two', 'three', 'four', 
    'five', 'six', 'seven', 'eight', 'nine'
    ];
    
    let answer = s;

    for(let i = 0; i < words.length; i++) {
        let arr = answer.split(words[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}

