function solution(box, n) {
    //return Math.floor(box[0]/n) * Math.floor(box[1]/n) * Math.floor(box[2]/n)
    
    // 구조분해할당
    const [width, length, height] = box;
    return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n);

}