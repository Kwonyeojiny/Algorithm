function solution(array) {
    const rearray = array.sort(function(a, b){
	    return a - b;
    })
    const mid = Math.floor(rearray.length/2)
    return rearray[mid]
}