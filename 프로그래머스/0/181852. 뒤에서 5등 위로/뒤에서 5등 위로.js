function solution(num_list) {
    const sort = num_list.sort((a,b)=>a-b).slice(5)
    return sort
}