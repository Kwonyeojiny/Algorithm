function solution(sizes) {
    const sortsizes = sizes.map((el)=> el[0]>el[1]? [el[0],el[1]]:[el[1],el[0]])
    
    const w = []
    const h = []
    for(let i =0;i<sortsizes.length;i++){
        w.push(sortsizes[i][0])
        h.push(sortsizes[i][1])
    }
    
    return Math.max(...w)*Math.max(...h)
}