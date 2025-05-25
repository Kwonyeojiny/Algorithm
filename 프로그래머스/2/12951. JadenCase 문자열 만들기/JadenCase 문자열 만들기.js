function solution(s) {
    let arr = s.split(' ')
    
    for(let i = 0;i<arr.length;i++){
        if(arr[i]) 
            arr[i] = arr[i].substring(0,1).toUpperCase() + arr[i].substring(1,arr[i].length).toLowerCase()
    }
    
    return arr.join(' ')
}