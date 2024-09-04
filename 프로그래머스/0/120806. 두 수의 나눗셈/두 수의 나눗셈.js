function solution(num1, num2) {
    return parseInt(num1/num2*1000);
    // Math.floor 사용하는 습관!!
    return Math.floor(num1/num2*1000);
}