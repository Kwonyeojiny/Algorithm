function solution(brown, yellow) {
    // 8 <= brown <= 5000
    // 1 <= yellow <= 20000000
    // y <= x
    // (brown + yellow) / y === x
    let x, y;
    for(y = 3; y<=(brown+yellow)/y; y++){
        x = (brown + yellow) / y;
        if ((x - 2) * (y - 2) === yellow) break;
    }
    return [x, y]
    
}