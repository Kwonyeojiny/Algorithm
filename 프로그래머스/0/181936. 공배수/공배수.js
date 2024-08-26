function solution(number, n, m) {
    return number % n === 0 && number % m === 0 ? 1 : 0;
    
    // 이런 답도 있어요
    //return +!(number % n || number % m);
}