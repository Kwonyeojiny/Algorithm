function solution(a, b, flag) {
    
    // 방법1
    //if(flag == true) return a+b;
    //else return a-b;
    
    // 방법2
    return flag == true ? a+b:a-b;
}