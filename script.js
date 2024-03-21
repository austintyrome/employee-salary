
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const collectEmployees = function () {
  
  let addEmployee = true;

  let employeesArray = []

 while (addEmployee) {
  let employeeFirst = window.prompt("Enter employee name");
  let employeeLast = window.prompt("Enter employee last name");
  let employeeSalaries = window.prompt("Enter employee Salary");
  const employee =  { firstName:  employeeFirst, lastName: employeeLast, salary: employeeSalaries}
employeesArray.push(employee)
  addEmployee = window.confirm("Would you like to add another employee?");
}
return employeesArray
}

const displayAverageSalary = function (employeesArray) {
 
  function getAverage() {
    let sum = 0;
    for (let i = 0; i < employeesArray.length; i++) {
      let convertNumber = Number(employeesArray[i].salary)
      sum += convertNumber;


    }
    return sum / employeesArray.length;
  }
  const averageSalary = getAverage()
  console.log(averageSalary);
}

const getRandomEmployee = function (employeesArray) {

  const index = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[index];
const employeeMonth = randomEmployee.firstName + randomEmployee.lastName

  console.log(`Congradulations!! ${employeeMonth} you are emplyoee of the month`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/


const displayEmployees = function (employeesArray) {

  const employeeTable = document.querySelector('#employee-table');

  
  employeeTable.innerHTML = '';

  
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}



const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);