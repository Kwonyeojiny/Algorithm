function solution(n) {
    var answer = [];
    while(n){
        answer.push(n);
        if(n == 1) return answer;      
        if(n % 2 == 0) n/=2;
        else n = 3*n + 1;
    }
    
    // 재귀함수 방법
    arr.push(n)
    if (n === 1) return arr
    if (n % 2 === 0) return solution(n / 2, arr)
    return solution(3 * n + 1, arr)
}