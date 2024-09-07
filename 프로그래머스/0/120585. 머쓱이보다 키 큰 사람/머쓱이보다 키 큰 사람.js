function solution(array, height) {
    var answer = 0;
    for(i in array){
        if(height < array[i])
            answer++;
    }
    return answer;
}