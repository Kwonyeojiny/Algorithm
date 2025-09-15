function solution(s) {
    const words = [
    'zero', 'one', 'two', 'three', 'four', 
    'five', 'six', 'seven', 'eight', 'nine'
    ];
    
    for(let i = 0; i< 10; i++){
        const re = new RegExp(words[i], 'g');
        s = s.replace(re, String(i));
    }
    
    return Number(s);
}

