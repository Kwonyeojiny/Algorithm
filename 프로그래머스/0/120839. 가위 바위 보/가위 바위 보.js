function solution(rsp) {
    
    const rspWin = {
        2:0,
        0:5,
        5:2,
    }
    return [...rsp].map(x => rspWin[x]).join('')
    
    // switch 사용
    // return [...rsp].map(v => {
    //     switch(+v) {
    //         case 2:
    //             return 0
    //         case 0:
    //             return 5
    //         default:
    //             return 2
    //     }
    // }).join('');
}