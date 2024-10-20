function solution(polynomial) {
    const po = polynomial.split(' + ');
    let xNum = 0;
    let Num = 0;

    po.forEach(n => {
        if (n.includes('x')) {
            const parts = n.split('x');
            if (parts[0] === "" || parts[0] === "1") {
                xNum += 1; // 계수가 1인 경우 또는 "x"인 경우
            } else {
                xNum += Number(parts[0]); // 다른 계수인 경우
            }
        } else {
            Num += Number(n); // 상수항인 경우
        }
    });

    const arr = [];
    if (xNum !== 0) arr.push(`${xNum === 1 ? "" : xNum}x`);
    if (Num !== 0) arr.push(Num);

    return arr.length > 0 ? arr.join(' + ') : "0";
}
