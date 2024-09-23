function solution(n) {
    let i = 0
    let fac = 1
    while(fac<=n){
        i++
        fac *= i 
    }
    return i-1
}