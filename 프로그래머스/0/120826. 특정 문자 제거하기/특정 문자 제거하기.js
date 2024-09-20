function solution(my_string, letter) {
    //return [...my_string].filter((e) => !letter.includes(e)).join('')
    
    return my_string.replaceAll(letter, "");
}