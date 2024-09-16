function solution(n) {
    const leng = String(n)
    let sum = 0;
    for(let i=0;i<leng.length;i++)
        sum += +leng[i]
    return sum;
}