function solution(my_string, k) {
    // 1번째 방법
    var answer = '';
    for(i=0;i<k;i++)
        answer += my_string
    // 2번째 방법 repeat() 사용
    return my_string.repeat(k);
}