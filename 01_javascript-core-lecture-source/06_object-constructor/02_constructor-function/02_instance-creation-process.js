// 인스턴스 생성 과정
function Student(name, age) {
    // 1. new 연산자와 함께 호출될 경우 암묵적으로 인스턴스가 생성되며
    // this에 바인딩 되는 과정이 런타임 이전에 실행
    console.log(this);
    // 2. this에 바인딩 되어 있는 인스턴스에 프로퍼티를 추가한다.
    this.name = name;
    this.age = age;
    this.getInfo = function(){
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
    // 3. 완성된 인스턴스가 바인딩된 this가  암묵적을 반환된다.
    // return {}; -> 명시적으로객체를 반환하면 암묵적으로 this 반환이 무시된다.
    // return 1; -> 명시적으로 원시 값을 반환하면 구문이 무시되고 this가 반환된다.
}


const student = new Student('장보고', 35);

console.log(student);
console.log(student.getInfo());