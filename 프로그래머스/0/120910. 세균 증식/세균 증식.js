function solution(n, t) {
    let covid = n;
    for(let i = 1;i<=t;i++) covid *= 2
    return covid
}