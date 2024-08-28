function solution(arr, queries) {
    
    // 방법 1
    for(let i = 0; i < queries.length; i++){
        const [s, e, k] = queries[i];        
        for(let j = s; j <= e; j++){
            if(j % k === 0){
                arr[j] += 1;
            }}}   
    return arr;
    
    // 방법 2
    for([s,e,k] of queries){
        for(i == s; i <= e; i++){
            if(i % k == 0) arr[i]++;
        }
    }
    return arr;
    
    // 방법 3
    return queries.reduce((acc,[s,e,k]) => {
        for(i == s; i<=e; i++){
            if(i%k == 0 ) acc[i]++;
        }
        return acc;
    },[...arr]);
}