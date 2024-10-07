function solution(numbers) {
    const nums = ["zero", "one", "two", "three", "four", "five",
                  "six", "seven", "eight", "nine"]
    
    nums.forEach((num, index)=>{
        // split().join()
        //numbers = numbers.split(num).join(index)
        
        // replaceAll
        numbers = numbers.replaceAll(num,index)
    })
    
    return Number(numbers)
}