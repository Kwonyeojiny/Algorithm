function solution(array) {
    const arr = array.slice().sort((a, b) => a - b); // 원본 배열을 수정하지 않도록 slice() 사용
    const max = [];
    max[0] = arr[arr.length - 1]; // 가장 큰 수 저장
    
    // 원본 배열에서 가장 큰 수의 인덱스 찾기
    for (let i = 0; i < array.length; i++) {
        if (array[i] === max[0]) {
            max[1] = i; // 인덱스 저장
            break; // 가장 큰 수의 첫 번째 인덱스만 필요하므로 종료
        }
    }

    return max;
}
