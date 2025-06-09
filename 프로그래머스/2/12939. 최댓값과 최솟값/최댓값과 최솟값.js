function solution(s) {
    const Ssort = s.split(' ').map(Number)
    
    return Math.min(...Ssort) + " " + Math.max(...Ssort)
}