function solution(n) {
    let answer = 0;
    
    // 첫번째 방법
    if (n % 2 === 0){
        for(i=2;i<=n;i+=2)
            answer += i*i;
    }
    else{
        for(i=1;i<=n;i+=2)
            answer += i;
    }
    return answer;
    
    // 두번째 방법 등차수열 사용
    //if(n%2===1)
    //  return  (n+1)/2*((n+1)/2) ;
    //else
    //  return   n*(n+1)*(n+2)/6;
}