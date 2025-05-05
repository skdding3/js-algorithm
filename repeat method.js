// 1장 자바스크립트 반복문 메서드

const friends = ['John', 'Jane', 'Mary', 'Mark', 'Lisa']

// forEach 문
friends.forEach(name => console.log('hello', name))


// 새 배열 반환

// function
function addFriend(array) {
    let newFriends = []

    for (let i = 0; i < array.length; i++) {
        newFriends.push('김' + array[i])
    }

    return console.log(newFriends)
}

addFriend(friends) // ['김John', '김Jane', '김Mary', '김Mark', '김Lisa']


// map 메서드
friends.map(name => console.log('김' + name))