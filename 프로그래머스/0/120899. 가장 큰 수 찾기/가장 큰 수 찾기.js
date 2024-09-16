function solution(array) {
    // Math.max 숫자 중 가장 큰 값 반환 후 큰값의 인덱스
    let a = Math.max(...array);
    return [a, array.indexOf(a)]
}