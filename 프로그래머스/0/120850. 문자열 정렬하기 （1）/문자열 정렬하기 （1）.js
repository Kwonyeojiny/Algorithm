function solution(my_string) {
    return [...my_string].map(Number).filter(e=>!isNaN(e)).sort((a,b)=> a-b)
}