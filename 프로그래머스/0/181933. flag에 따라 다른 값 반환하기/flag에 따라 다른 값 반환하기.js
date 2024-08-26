function solution(a, b, flag) {
    
    // 방법1
    //if(flag) return a+b;
    //else return a-b;
    
    // 방법2
    return flag ? a+b:a-b;
}