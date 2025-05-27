function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const words = [];
    
    const generate = (current) => {
        if(current.length > 5) return;
        if(current.length > 0) words.push(current);
        
        for(let i = 0; i < vowels.length; i++) {
            generate(current + vowels[i]);
        }
    }
    
    generate('');
    
    words.sort();
    
    return words.indexOf(word) + 1;
}