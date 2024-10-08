export default function getStudentIdsSum(studentList) {
  return studentList.reduce((acc, obj) => acc + obj.id, 0);
}
