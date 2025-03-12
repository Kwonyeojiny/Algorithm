function solution(answers) {
    const answer = []
    const stu1 = [1,2,3,4,5]
    const stu2 = [2,1,2,3,2,4,2,5]
    const stu3 = [3,3,1,1,2,2,4,4,5,5]
    
    let result = [0,0,0]
    
    for(let i =0;i<answers.length;i++){
        if(stu1[i%stu1.length] === answers[i]) result[0]++
        if(stu2[i%stu2.length] === answers[i]) result[1]++
        if(stu3[i%stu3.length] === answers[i]) result[2]++
    }
    
    const max = Math.max(...result)
    
    for(let i = 0; i<result.length;i++){
        if(result[i] === max) answer.push(i+1)
    }
    
    return answer
    
}