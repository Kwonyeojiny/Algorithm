function solution(citations) {
    const arr = citations.sort((a,b)=>b-a)
    let answer = 0
    
    for(let i = 0; i<arr.length;i++){
        if(arr[i]>i)answer++
    }
    return answer
    
}