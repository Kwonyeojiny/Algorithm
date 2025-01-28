function solution(num_list) {
    const sort = num_list.sort((a,b)=>a-b).filter((v,i)=>i>4)
    return sort
}