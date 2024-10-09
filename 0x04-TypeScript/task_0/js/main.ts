interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Yididia",
  lastName: "Abera",
  age: 21,
  location: "Addis Ababa",
}
const student2: Student = {
  firstName: "Dagim",
  lastName: "Shume",
  age: 15,
  location: "Hawassa",
}
const studentsList: Array<Student> = [student1, student2];

const table = document.createElement("table");
const thead = document.createElement("thead");
const header = document.createElement("tr");

const headers = Object.keys(studentsList[0]);
headers.forEach((h) => {
  const th = document.createElement("th");
  th.textContent = h.toString();
  header.appendChild(th);
});
thead.appendChild(header);
table.appendChild(thead);
const tbody = document.createElement("tbody");
studentsList.forEach((student) => {
  const tr = document.createElement("tr");
  headers.forEach((h) => {
    const td = document.createElement("td");
    td.textContent = String(student[h as keyof Student]);
    tr.appendChild(td);
  });
  tbody.appendChild(tr);
});
table.appendChild(tbody);
document.body.appendChild(table);
