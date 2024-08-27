function solution(numLog) {
    let arr = '';
    for(i=0;i<numLog.length;i++){
        const n = numLog[i+1] - numLog[i];
        switch(n){
            case 1 : arr += 'w'; break;
            case -1 : arr += 's'; break;
            case 10 : arr += 'd'; break;
            case -10 : arr += 'a'; break;
        }
    }
    return arr;
}