function solution(n) {
    const arr = []

    for(let i=4;i<=n;i++){
        let sum = 0;
        for(let j=1;j<=i;j++){
            if(i % j === 0) sum++
        }
        if(sum >= 3) arr.push(i)
    }
    return arr.length
}