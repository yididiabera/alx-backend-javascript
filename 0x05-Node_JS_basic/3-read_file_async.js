const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        return reject(Error('Cannot load the database'));
      }
      const file = data.toString();
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
      return resolve({ students, fields });
    });
  });
}

module.exports = countStudents;
