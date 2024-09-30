export default function createReportObject(employeesList) {
  const reportObj = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments: (employeesList) => Object.keys(employeesList).length,
  };
  return reportObj;
}
