function solution(n) {
    let arr = []
    let division = 2
    let num = n
    while(num >= 2){
        if(num % division === 0) {
            if(!arr.includes(division)) arr.push(division)
            num /= division
        }
        else division++
    }
    
    return arr
}