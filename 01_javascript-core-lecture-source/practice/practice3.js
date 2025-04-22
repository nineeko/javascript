// 제시 된 숫자값 배열과 문자값 배열을 오름차순 정렬,
// 내림차순 정렬하여 출력한다.
//[ 9, 20, 37, 54, 88, 100 ]
// [ 100, 88, 54, 37, 20, 9 ]
// [ 'hello', 'js', 'party', 'wow' ]
// [ 'wow', 'party', 'js', 'hello' ]
let numbers = [20, 100, 37, 54, 88, 9];
let strings = ['wow', 'js', 'party', 'hello'];

// 코드 작성
numbers.sort((a, b) => a - b);
console.log(numbers);
numbers.sort((a, b) => b - a);
console.log(numbers);
strings.sort();
console.log(strings);
strings.sort().reverse();
console.log(strings);