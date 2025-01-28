function solution(n)
{
    let sum = 0
    const stringnumb = String(n)
    for(let i =0; i<stringnumb.length;i++){
         sum += Number(stringnumb[i])
    }
    return sum
}