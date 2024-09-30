export default function createIteratorObject(report) {
  const employees = [];
  for (const employee of Object.values(report.allEmployees)) {
    employees.push(...employee);
  }
  return {
    [Symbol.iterator]: () => {
      let index = 0;
      return {
        next: () => {
          if (index < employees.length) {
            const value = employees[index];
            index += 1;
            return { value, done: false };
          }
          return { done: true };
        },
      };
    },
  };
}
