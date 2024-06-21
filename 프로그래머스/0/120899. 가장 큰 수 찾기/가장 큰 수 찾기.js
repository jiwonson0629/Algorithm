function solution(array) {
    const number = Math.max(...array)
    const index = array.indexOf(Math.max(...array))
    return [number, index];
}