function solution(quiz) {
    const answer = [];
    quiz.forEach((item)=>{
        const q =  item.split(" ")
        
        const a = +q[0];
        const b = +q[2];
        
        const result = (q[1] === '+') ? a+b : a-b
        
        const r = (q[4] == result) ? "O" : "X"
        answer.push(r)
    })
    
    return answer
}