function solution(my_string) {
    // let arr =[]
    // for(let i = 0;i<my_string.length;i++)
    //     if(my_string[i] === my_string[i].toUpperCase())
    //         arr.push(my_string[i].toLowerCase())
    //     else arr.push(my_string[i].toUpperCase())
    // return arr.join('')
    
    let arr ='';
    for(i in my_string)
        arr += my_string[i] === my_string[i].toUpperCase() ? my_string[i].toLowerCase() : my_string[i].toUpperCase()
    return arr
            
}