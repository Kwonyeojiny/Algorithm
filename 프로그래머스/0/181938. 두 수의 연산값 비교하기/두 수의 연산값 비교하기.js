function solution(a, b) {
    if(Number(String(a)+String(b)) < Number(2*a*b))
        return Number(2*a*b);
    else    return Number(String(a)+String(b));
}