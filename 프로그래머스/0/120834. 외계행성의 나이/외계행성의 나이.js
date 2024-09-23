function solution(age) {
    // return String(age)
    //     .split('')
    //     .map((e)=> String.fromCharCode(Number(e)+97))
    //     .join('')
    
    return String(age)
    .split('')
    .map((v) => "abcdefghij"[v])
    .join("");
}