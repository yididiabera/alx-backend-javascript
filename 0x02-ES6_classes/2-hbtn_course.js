export default class HolbertonCourse {
  constructor(name, length, students) {
    HolbertonCourse._validateName(name);
    HolbertonCourse._validateLength(length);
    HolbertonCourse._validateStudents(students);

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    HolbertonCourse._validateName(name);
    this._name = name;
  }

  set length(length) {
    HolbertonCourse._validateLength(length);
    this._length = length;
  }

  set students(students) {
    HolbertonCourse._validateStudents(students);
    this._students = students;
  }

  static _validateName(name) {
    if (typeof (name) !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  static _validateLength(length) {
    if (typeof (length) !== 'number') {
      throw new TypeError('Length must be a number');
    }
  }

  static _validateStudents(students) {
    if (!Array.isArray(students) || !students.every((student) => typeof (student) === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
