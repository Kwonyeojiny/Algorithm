function solution(num_list) {
    var odd = '';
    var even = '';
    for(i=0;i<num_list.length;i++)
        num_list[i] % 2 == 0 ? even += num_list[i] : odd += num_list[i];
    //return Number(even) + Number(odd);
    return +even + +odd; // 변수앞에 + 붙이면 숫자형으로 형번환!!
}