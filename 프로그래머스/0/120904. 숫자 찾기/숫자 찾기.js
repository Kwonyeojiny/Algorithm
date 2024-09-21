function solution(num, k) {
    let n = String(num).indexOf(k) 
    return n !== -1 ? n + 1 : n
}