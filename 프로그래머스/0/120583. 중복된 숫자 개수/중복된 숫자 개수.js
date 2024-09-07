function solution(array, n) {
    let result=0;
    for (i in array){
        if(array[i] === n)
            result ++;
    }
    return result;
}