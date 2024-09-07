function solution(n, k) { 
    const price = n * 12000 + (k - Math.floor(n/10)) * 2000;
    return price;
}