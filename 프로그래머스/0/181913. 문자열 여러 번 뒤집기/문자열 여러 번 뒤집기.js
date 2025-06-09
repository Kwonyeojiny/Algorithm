function solution(my_string, queries) {
    queries.forEach(a => {
        const [from, to] = a
        const reverse = [...my_string].slice(from, to + 1).reverse().join("")
        my_string = my_string.slice(0, from) + reverse + my_string.slice(to+1)
    })
    
    return my_string
}