function solution(my_string, letter) {
    return [...my_string].filter((e) => !letter.includes(e)).join('')
}