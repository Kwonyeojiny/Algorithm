function solution(s)
{
    let stack = [];
    
    if(s.length % 2 === 1) return 0
    
    for(let i = 0; i < s.length; i++){
        if(s[i] !== stack[stack.length-1]) stack.push(s[i]);
        else stack.pop();
    }
    
    return stack.length ? 0 : 1;
}