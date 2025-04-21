// const
// let 키워드에서 알아본 특징은 모두 동일하며 상수 선언에서 사용된다는 점이 특징이다.

// const 키워들 선언한 변수는 반드시 선언과 동시에 초기화해야한다.
// const x;
const x = 1;
// 재할당도 금지 된다. TypeError: Assignment to constant variable.
// x =2;

const student = {
    name : '홍길동',
    age : 20
};

student.name = '유관순';  // 객체의 프로퍼티 값을 변경하는 것은 문제가 없다.
console.log(student);

// student = {}; // 객체 재할당은 안 됨.