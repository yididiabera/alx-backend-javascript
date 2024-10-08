export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList.filter((obj) => obj.location === city).map((obj) => {
    const newObj = obj;
    let found = false;
    for (const newGrade of newGrades) {
      if (newGrade.studentId === obj.id) {
        newObj.grade = newGrade.grade;
        found = true;
      }
    }
    if (!found) {
      newObj.grade = 'N/A';
    }
    return newObj;
  });
}
