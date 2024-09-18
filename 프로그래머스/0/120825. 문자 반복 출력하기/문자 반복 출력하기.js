function solution(my_string, n) {
    // let answer = '';
    // for(let i=0;i<my_string.length;i++)
    //     for(let j=1;j<=n;j++)
    //         answer += my_string[i]
    
    // 구조분해할당
    let answer = [...my_string].map(v => v.repeat(n)).join("");
    return answer
}