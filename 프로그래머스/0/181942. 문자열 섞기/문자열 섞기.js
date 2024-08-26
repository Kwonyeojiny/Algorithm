function solution(str1, str2) {
    let answer = '';
    
    // 1번째 방법
    for(i=0;i<str1.length;i++){
        answer += str1[i] + str2[i]
    }
    
    // 2번째 방법
    answer = [...str1].map((s, i) => s+str2[i]).join('');
    return answer;
}