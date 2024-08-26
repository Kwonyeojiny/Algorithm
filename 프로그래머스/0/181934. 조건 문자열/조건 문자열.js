function solution(ineq, eq, n, m) {
    if(ineq === "<")
        if(eq === "=")
            return n <= m ? 1:0 ;
        else return n < m ? 1:0 ;
    else {
        if(eq === "=")
            return n >= m ? 1:0 ;
        else return n > m ? 1:0 ;
    }
    
    
    // 이런 방법도 있어요
    
    // 방법1
    if (eq === '=' && n === m) return 1
    if (ineq === '<' && n < m) return 1
    if (ineq === '>' && n > m) return 1
    return 0
    
    
    //방법2 객체 생성 
    const op = operations[ineq + eq];
    return Number(op(n, m));
}
// 방법2 객체
const operations = {
  '>=': (n, m) => n >= m,
  '<=': (n, m) => n <= m,
  '>!': (n, m) => n > m,
  '<!': (n, m) => n < m,
};
