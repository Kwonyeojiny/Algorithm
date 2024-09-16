function solution(n, numlist) {
    // filter 사용
    return numlist.filter((v) => v%n === 0 )
}