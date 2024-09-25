function solution(s) {
    // const s_arr = s.split(' ')
    let arr = []
    // for(let i=0;i<s_arr.length;i++){
    //     s_arr[i] === 'Z' ? arr.pop(s_arr[i-1]) : arr.push(s_arr[i])
    // }
    // const sum = arr.reduce((acc,num) => +acc + +num,0)
    // return sum
    
    s.split(' ').forEach((target) => {
        (target === 'Z') ? arr.pop() : arr.push(+target)
    })

    return arr.reduce((pre, cur) => +pre + +cur,0) 

}