const createClassRoom = (numbersOfStudents) => {
  const studentSeat = (seat) => {
    return () => {
      return seat;
    };
  };

  let students = [];

  for (const i = 0; i < numbersOfStudents; i++) {
    students.push(studentSeat(i + 1));
  };

  return students;
};

const classRoom = () => {
  return createClassRoom(10);
};

console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());

