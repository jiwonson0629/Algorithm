function solution(babbling) {
    var answer = 0;
    const a = ["aya", "ye", "woo", "ma"];

    babbling.forEach(ba => {
        a.forEach(a => {
            if(ba.includes(a)) {
                ba = ba.split(a).join(' ');
            }
        })
        
            if(ba.trim().length === 0) answer++;
    })
    return answer;
}