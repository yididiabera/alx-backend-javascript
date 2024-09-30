export default function createEmployeesObject(departmentName, employees) {
  const deptObj = {
    [`${departmentName}`]: [...employees],
  };
  return deptObj;
}
