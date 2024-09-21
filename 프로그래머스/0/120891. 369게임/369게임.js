function solution(order) {
    return [...String(order)].filter((e) => ['3','6','9'].includes(e)).length
}