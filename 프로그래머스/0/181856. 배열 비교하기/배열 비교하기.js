function solution(arr1, arr2) {
    const arr1L = arr1.length
    const arr2L = arr2.length
    const arr1Sum = arr1.reduce((acc, cur) => acc+cur, 0) 
    const arr2Sum = arr2.reduce((acc, cur) => acc+cur, 0)
    
    if(arr1L === arr2L) {
       if(arr1Sum > arr2Sum) return 1
        else if (arr1Sum < arr2Sum) return -1
        else return 0
    }
    else if (arr1L > arr2L) return 1
    else if (arr1L < arr2L) return -1
}