// 내가 푼 풀이
// charAt(i): i번째의 문자를 가져옴
// substring(i): 문자열의 i번째 문자부터 끝까지 가져옴

function solution(s) {
    return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}

// 정답 풀이
