function solution(a, b) {
    if(Number(String(a)+String(b)) < Number(2*a*b))
        return Number(2*a*b);
    else    return Number(String(a)+String(b));
    
    // 이런 방법도 있어요
    //let num1 = parseInt(a+""+b+"");
    //let num2 = 2*a*b;
    //return num1 > num2 ? num1 : num2;
}