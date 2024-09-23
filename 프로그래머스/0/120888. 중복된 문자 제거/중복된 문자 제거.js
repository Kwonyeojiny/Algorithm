function solution(my_string) {
    let arr = ''
    my_string.split('')
    for(let i = 0;i<my_string.length;i++){
        if (arr.indexOf(my_string[i]) === -1)
            arr += my_string[i]
    }
    return arr
}