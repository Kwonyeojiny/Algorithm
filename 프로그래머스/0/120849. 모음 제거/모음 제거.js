function solution(my_string) {
    const 모음 = ['a','e','i','o','u']
    return [...my_string].filter((v) => !모음.includes(v)).join('')
}