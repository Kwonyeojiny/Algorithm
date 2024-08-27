function solution(a, b, c) {
    var answer = 0;

    //Math.pow(a, 2) -> a*a
    // a ** 2 -> a*a, a ** 3 -> a*a*a
    Math.pow([a,b,c],2)
    if(a==b && b==c)
        answer = (a + b + c) * (a*a + b*b + c*c) * (a*a*a + b*b*b + c*c*c);
    else{
        if(a==b || b==c || c==a)
            answer = (a + b + c) * (a*a + b*b + c*c);
        else answer = a + b + c;
    }
    
    return answer;
}