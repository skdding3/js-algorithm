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

// O (log n) - 로그 공간
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, left, mid - 1);
    return binarySearch(arr, target, mid + 1, right);
  }

// 공간 복잡도
// |
// |           O(n²)      <-- 예: 2차원 배열
// |          *
// |        *
// |      *
// |    *        O(n)
// |  *
// |*
// |__________________________→ 입력 크기(n)
//  O(1)
