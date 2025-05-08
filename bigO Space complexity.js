//  O(1) - 상수 공간
function getFirst(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}

console.log(getFirst([1, 2, 3, 4, 5])) // 1


// O(n) - 선형 공간
function getDoubleArray(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2)
    }
    return newArr
}

// O(n^2) - 이차 공간
function createMatrix(n) {
    let matrix = []
    for (let i = 0; i < n; i++) {
        matrix[i] = new Array(n).fill(0)
    }
    return matrix
}

console.log(createMatrix(3)) // [[0, 0, 0], [0, 0, 0], [0, 0, 0]]



