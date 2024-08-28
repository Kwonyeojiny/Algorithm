function solution(arr, queries) {
    // 다시 한번 더 보기
    
    
    // 방법 1
    queries.map((query) => { 
    let i = query[0];
    let j = query[1];
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    });
    return arr;
    
    // 방법 2
    queries.forEach(([a, b]) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
    });
    return arr;
}