function solution(order) {
    return [...String(order)].filter((e) => ['3','6','9'].includes(e)).length

    return ("" + order).split(/[369]/).length - 1;
    
    return [...order.toString().matchAll(/[3|6|9]/g)].length;
}
