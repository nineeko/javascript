//[
//   Student { firstName: '관순', lastName: '유', score: 80 },
//   Student { firstName: '보고', lastName: '장', score: 70 },
//   Student { firstName: '길동', lastName: '홍', score: 60 }
// ]
// [
//   { name: '유관순', score: 80 },
//   { name: '장보고', score: 70 },
//   { name: '홍길동', score: 60 }
// ]
function Student(firstName, lastName, score){
    this.firstName = firstName;
    this.lastName = lastName;
    this.score = score;
}

const studentList = [
    new Student('길동', '홍', 60),
    new Student('보고', '장', 70),
    new Student('관순', '유', 80)
];

sortFromScore(studentList);
console.log(studentList);

console.log(makeFullName(studentList));

function sortFromScore(arr) {
    arr.sort((a, b) => b.score - a.score);
}

function makeFullName(arr){
    return arr.map(student => ({
        name: student.lastName + student.firstName,
        score: student.score
    }));
}
