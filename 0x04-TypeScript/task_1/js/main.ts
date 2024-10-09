interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.substring(0, 1)}. ${lastName}`;
}
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomeWork(): string {
    return 'Currently working';
  }
  displayName(): string {
    return this.firstName;
  }
}
interface StudentClassConstructor {
  new(firstName: string, lastName: string): StudentClass;
}
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomeWork(): string;
  displayName(): string;
}
