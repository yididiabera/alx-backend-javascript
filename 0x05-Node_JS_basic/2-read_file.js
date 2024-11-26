const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  const file = fs.readFileSync(path).toString();
  const rows = file.split('\n');
  const students = rows.slice(1, rows.length - 1);
  console.log(`Number of students: ${students.length}`);
  const fields = [];
  for (const student of students) {
    const data = student.split(',');
    if (!fields.includes(data[3])) {
      fields.push(data[3]);
    }
  }
  for (const field of fields) {
    const studentsInField = students.filter((student) => student.split(',')[3] === field);
    const names = studentsInField.map((student) => student.split(',')[0]);
    console.log(`Number of students in ${field}: ${studentsInField.length}. List: ${names.join(', ')}`);
  }
}

module.exports = countStudents;
