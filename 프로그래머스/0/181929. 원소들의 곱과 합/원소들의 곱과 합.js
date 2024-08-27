function solution(num_list) {
    var mul = 1;
    var plu = 0;

    for (i = 0; i<num_list.length;i++){
        mul *= num_list[i];      
        plu += num_list[i];
    }
    return mul < plu ** 2 ? 1 : 0;
}