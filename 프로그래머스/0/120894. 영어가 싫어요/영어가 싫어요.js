function solution(numbers) {
    const nums = ["zero", "one", "two", "three", "four", "five",
                  "six", "seven", "eight", "nine"]
    
    nums.forEach((num, index)=>{
        numbers = numbers.split(num).join(index)
    })
    
    return Number(numbers)
}