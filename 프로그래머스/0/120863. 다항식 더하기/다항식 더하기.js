function solution(polynomial) {
    const po = polynomial.split(' + ')
    let xNum = 0
    let Num = 0
    po.map(n => {
        if(n.includes("x")){
            const spl = n.split('x')
            if(spl[0] === "") xNum += 1
            else xNum += Number(spl[0])
        }
        else Num += Number(n)
    })

    const arr = []
    if (xNum !== 0 ) arr.push(`${xNum === 1 ? "" : xNum }x`)
    if (Num !== 0) arr.push (Num)
    
    return arr.join(' + ')
}