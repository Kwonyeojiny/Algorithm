function solution(s) {
    let result = 0;
    const stack = [];
    let right = false;
    
    if(s.length % 2 === 1) return 0;
    
    for(let i = 0; i < s.length ; i++){
        const str = s.slice(i) + s.slice(0,i);
        right = true;
        
        for(let st of str){
            if(st === '{' || st === '[' || st ==='(') stack.push(st)
            else {
                const last = stack.pop()
                if(st === '}' && last === '{') continue;
                if(st === ')' && last === '(') continue;
                if(st === ']' && last === '[') continue;
                right = false;
                break;
            }
        }
        if(right) result ++
    }
    return result
}