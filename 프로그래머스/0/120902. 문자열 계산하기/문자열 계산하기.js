function solution(my_string) {
    // const arr = my_string.split(' ')
    // let first = Number(arr[0])
    // arr.forEach((item,index)=>{
    //     if(item === '+') first += Number(arr[index+1])
    //     if(item === '-')  first -= Number(arr[index+1])
    // })
    // return first
    
    // 문제는 풀리지만 쓰지말라는 코드 eval
    return eval(my_string)
}