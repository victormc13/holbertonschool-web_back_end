export default function createReportObject(employeesList) {
  let reportObj = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };

  return reportObj;
}
