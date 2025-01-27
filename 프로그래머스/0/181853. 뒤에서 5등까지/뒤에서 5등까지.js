function solution(num_list) {
    const sort_list = num_list.sort((a,b) => a-b)
    let five_list = []
    for(let i=0;i<5;i++){
        five_list[i] = num_list[i]
    }
    
    return five_list;
}