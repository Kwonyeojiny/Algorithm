function solution(num_list) {
    let idx = num_list.length;

    if(num_list[idx-2] < num_list[idx-1])
        num_list.push(num_list[idx-1]-num_list[idx-2]);
    else num_list.push(num_list[idx-1]*2);
    return num_list;
}