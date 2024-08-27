function solution(a, d, included) {
    var answer = 0 ;
    for(i=0;i<included.length;i++){
        if(included[i]){
            answer += (a + i * d);
        }
    }
    return answer;
    
    
    //const arr = [a] // 첫째항 a인 arr배열 생성
    //for(let i = 0 ; i < included.length; i++) { // included.length의 길이 n
    //    arr[i+1] = arr[i] + d
    //}
    //return arr.reduce((acc, cur, idx) => included[idx] ? acc+cur : acc , 0)
}