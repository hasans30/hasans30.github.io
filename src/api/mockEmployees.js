import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const employees = [
  {
    name: "EmpName1",
    Address: "Bellevue,WA",
    Phone: "425-888-8888",
    department: "Software"
  },
  {
    name: "EmpName2",
    Address: "Shammamish,WA",
    Phone: "425-888-8888",
    department: "AI"
    
  },
  {
    name: "EmpName3"
    Address: "Redmond,WA",
    Phone: "425-888-8888",
    department: "AI"
    
  },
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (employee) => {
  return replaceAll(employee.name, ' ', '-');
};

class EmployeeApi {
  static getAllEmployees() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], employees));
      }, delay);
    });
  }


}

export default EmployeeApi;
