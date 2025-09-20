// Assign an enployee variable to an object containing name and street address
var employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
};

// Create a function to update the employee's name and street address
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

// Create a function to destructively update the employee's name and street address
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// Create a function to delete a key from the employee object
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

// Create a function to destructively delete a key from the employee object
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}   






