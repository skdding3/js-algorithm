// 빅오 표기법 시간복잡도


// O(1) - 상수 시간
function getFirst(arr) {
    return arr[0]
}

console.log(getFirst([1, 2, 3, 4, 5])) // 1



// O(n) - 선형 시간
function printAll(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

console.log(printAll([1, 2, 3, 4, 5])) // 1 2 3 4 5


// O(n^2) - 제곱 시간
function printPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j])
        }
    }
}

console.log(printPairs([1, 2, 3, 4, 5])) // 1 1 1 2 1 3 1 4 1 5 2 1 2 2 2 3 2 4 2 5 3 1 3 2 3 3 3 4 3 5 4 1 4 2 4 3 4 4 4 5 5 1 5 2 5 3 5 4 5 5

