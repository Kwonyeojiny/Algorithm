function solution(my_string) {
    const num = my_string.split('')
    let sum = 0;
    for(let i=0;i<num.length;i++){
        if(Number(num[i]))
            sum += +num[i]
    }
    return sum
}