function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    let timeInEvents = [];
    let timeOutEvents = [];

    let employeeObj = {
        'firstName': firstName,
        'familyName': familyName,
        'title': title,
        'payPerHour': payPerHour,
        'timeInEvents': timeInEvents,
        'timeOutEvents': timeOutEvents,
    };

    // console.log(employeeObj);
    return employeeObj;
}

function createEmployeeRecords(arrays) {
    const employeeRecords = [];
    arrays.forEach(employee => {
        // console.log(employee);
        const record = createEmployeeRecord(employee)
        employeeRecords.push(record);
    })
    // console.log(employeeRecords);
    return employeeRecords;
}

createEmployeeRecords([['Bob', 'Wilson', 'Admiral', 35], ['Jon', 'Brannom', 'Captain', 30]])