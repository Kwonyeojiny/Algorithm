function solution(array) {
    let m = new Map();
    
    // x || y
    // x를 true로 반환할 수 있으면 x를 반환하고, 그렇지 않으면 y를 반환
    for (let n of array) m.set(n, (m.get(n) || 0)+1);
    
    // value값 정렬해주기  key:array숫자, value:array숫자 반복값
    m = [...m].sort((a,b)=>b[1]-a[1]);
    // 첫번쪠 예시 기준) m[0][1] -> 3(value), m[1][1] -> 1, m[0][0] -> 3(key)
    return (m.length === 1 || m[0][1] > m[1][1]) ? m[0][0] : -1;
}