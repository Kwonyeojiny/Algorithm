function solution(n) {
    const m = 1234567
    if(n === 1) return 1 % m;
    if(n === 2) return 2 % m;
    
    let prev1 = 1, prev2 = 2, current=0;
    
    for(let i = 3; i <= n; i++){
        current = (prev1 + prev2) % m;
        prev1 = prev2;
        prev2 = current;
    }
    return current;
}