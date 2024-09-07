function solution(num_list) {
    let answer = [0,0];
    for (i in num_list){
        if(num_list[i]%2==0) answer[0]++;
        else answer[1]++;
    }
    return answer;
}