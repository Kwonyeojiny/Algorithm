function solution(sizes) {
    const {w,h} = sizes.reduce((acc,el)=>{
        const [width, height] = el[0] > el[1] ? [el[0],el[1]] : [el[1],el[0]];
        acc.w.push(width);
        acc.h.push(height);
        return acc;
    },{w: [], h: []});
    
    return Math.max(...w) * Math.max(...h);
}