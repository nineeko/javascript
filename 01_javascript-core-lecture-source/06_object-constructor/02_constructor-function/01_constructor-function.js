// 생성자 함수
// 객체 리터럴은 직관적이고 간편한 방식이지만 단 하나의 객체를 생성한다.
// 동일 프로퍼티를 갖는 객체를 여러 개 생성해야 하는 경우에는 비효율적이다.
const student ={
    // 프로퍼티 : 객체의 상태를 나타내는 값으로 키-값 쌍으로 구성함
    name: '유관순',
    age : 16,
    // 매서드 : 프로퍼티를 참조하고 조작할 수 있는 동작
    getInfo : function () {
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
};

const student2 ={
    // 프로퍼티 : 객체의 상태를 나타내는 값으로 키-값 쌍으로 구성함
    name: '홍길동',
    age : 20,
    // 매서드 : 프로퍼티를 참조하고 조작할 수 있는 동작
    getInfo : function () {
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
};

// 생성자 함수에 의한 객체 생성
function Student(name, age) {
    this.name = name;
    this.age = age;
    this.getInfo = function(){
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
}
// 인스턴스의 생성
const student3 = new Student('장보고', 35);
const student4 = new Student('선덕여왕', 40);

console.log(student3);
console.log(student3.getInfo());
console.log(student4);
console.log(student4.getInfo());
