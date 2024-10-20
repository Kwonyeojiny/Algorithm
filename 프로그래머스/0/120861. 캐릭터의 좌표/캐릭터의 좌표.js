function solution(keyinput, board) {
    let arr = [0,0]
     
    keyinput.forEach(key => {
        switch(key){
            case "up" :
               if(arr[1] < (board[1]-1)/2) arr[1]++
                break;
            case "down" :
                if(arr[1] > -((board[1]-1)/2)) arr[1]--
                break;
            case "right" :
                if(arr[0] < (board[0]-1)/2) arr[0]++
                break
            case "left" :
                if(arr[0] > -((board[0]-1)/2)) arr[0]--
                break;      
        }
    })
        
    return arr
}