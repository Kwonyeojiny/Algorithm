function solution(intStrs, k, s, l) {
    var answer = [];
    
    for(i=0;i<intStrs.length;i++){
        if(Number(intStrs[i].slice(s,s+l))>k)
            answer.push(Number(intStrs[i].slice(s,s+l)));
    }

    
    return answer;
}