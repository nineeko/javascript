// 일반적인 배열과의 차이점
// 일반적인 배열 : 각 요소가 동일한 데이터 크기를 가지며, 연속적으로 이어져 있어 인덱스를 통해
// 임의의 요소에 한 번에 접근할 수 있는 고속 동작이 특징
// 자바스크립트의 배열 : 일반적인 배열의 동작을 흉내낸 특수한 객체로
// 각 메모리 공간이 동일한 크기를 가지지 않아도 되고 연속적으로 이어져있지 않을 수도 있다.
// 인덱스로 배열 요소에 접근하는 경우 일반적인 배열보다 느리지만, 요소의 삽입 삭제는 빠르다.
console.log(Object.getOwnPropertyDescriptors([1,2,3]));

// 자바스크립트의 모든 값이 객체의 프로퍼티 값이 될 수 있으므로 모든 값이 배열의 요소가 될 수 있다.
const arr = ['홍길동',20 , true ,null ,undefined, [], {}, function(){} ];

console.log(arr);
console.log(arr.length);
console.log(Object.getOwnPropertyDescriptors(arr));

