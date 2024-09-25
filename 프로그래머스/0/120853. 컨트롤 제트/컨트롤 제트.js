function solution(s) {
    const s_arr = s.split(' ')
    let arr = []
    for(let i=0;i<s_arr.length;i++){
        if(s_arr[i] == 'Z') arr.pop(s_arr[i-1])
        else  arr.push(s_arr[i])
    }
    const sum = arr.reduce((acc,num)=>+acc + +num,0)
    return sum

}