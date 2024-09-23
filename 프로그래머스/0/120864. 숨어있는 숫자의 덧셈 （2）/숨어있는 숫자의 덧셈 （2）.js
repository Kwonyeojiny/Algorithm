function solution(my_string) {
    return my_string.split(/[A-z]/g).reduce((a,b)=> +a + +b,0)
}