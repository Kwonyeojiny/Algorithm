function solution(dots) {
    // 1차원 배열의 인덱스가 0인 것끼리 비교 x축 값이 작은 것 앞으로 옴
//     dots.sort((a,b) => a[0] - b[0])
//     // [ [x 작은 놈, y],[x 작은 놈, y],[x 큰 놈, y],[x 큰 놈, y] ]
//     // [[1, 1], [1, 2], [2, 1], [2, 2] ]
    
//     const row = Math.abs(dots[0][1] - dots[1][1])
//     const col = Math.abs(dots[0][0] - dots[2][0])
    
    // const [[x1,y1],[x2,y2],[x3,y3],[x4,y4]] = dots
    // const row = Math.max(x1,x2,x3,x4) - Math.min(x1,x2,x3,x4)
    // const col = Math.max(y1,y2,y3,y4) - Math.min(y1,y2,y3,y4)
    
    // return row * col
    
    const x = [...new Set(dots.map(p => p[0]))]
    const y = [...new Set(dots.map(p => p[1]))]
    
    return Math.abs((x[0] - x[1]) * (y[0] - y[1]))
}