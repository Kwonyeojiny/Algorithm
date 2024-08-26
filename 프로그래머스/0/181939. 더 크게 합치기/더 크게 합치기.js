function solution(a, b) {
    const ab = String(a) + String(b);
    const ba = String(b) + String(a);
    if(Number(ab) < Number(ba))
        return Number(ba);
    else return Number(ab);

    // 이런 코드도 있음
    //return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
}