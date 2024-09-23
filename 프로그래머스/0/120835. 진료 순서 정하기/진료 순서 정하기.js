function solution(emergency) {
    // slice로 emergency복사 후 정렬
    const em = [...emergency].sort((a,b)=> b-a)
    // emergency의 요소들이 복사한 배열의 어느 인덱스에 위치하는지
    return emergency.map((e)=>em.indexOf(e)+1)
}