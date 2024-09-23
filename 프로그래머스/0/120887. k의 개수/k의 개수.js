function solution(i, j, k) {
    
    // 모든 수를 한줄로 만들고 K기준으로 나눈 배열의 갯수 
    let a ='';
    for(i;i<=j;i++){
        a += i;
    }

    return a.split(k).length-1;
}