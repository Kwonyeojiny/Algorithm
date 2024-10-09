function solution(array, n) {
    array.sort((a,b)=> a-b)
    let num = array[0]
    for(let i = 1;i<array.length;i++){
        if(Math.abs(n - array[i]) < Math.abs(n-num)) 
            num = array[i]
    }
    return num
}