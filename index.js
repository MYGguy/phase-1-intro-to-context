const testEmployees = createEmployeeRecords([['Bob', 'Wilson', 'Admiral', 35], ['Jon', 'Brannom', 'Captain', 30]]);

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

// console.log(createEmployeeRecords([['Bob', 'Wilson', 'Admiral', 35], ['Jon', 'Brannom', 'Captain', 30]]));

function createTimeInEvent(employee, dateStamp) {
    const [date, hour] = dateStamp.split(' ');

    employee.timeInEvents.push({
        'type': 'TimeIn',
        'hour': parseInt(hour, 10),
        'date': date,
    });

    // console.log(employee);
    return employee;

}

function createTimeOutEvent(employee, dateStamp) {
    const [date, hour] = dateStamp.split(' ');

    employee.timeOutEvents.push({
        'type': 'TimeOut',
        'hour': parseInt(hour, 10),
        'date': date,
    });

    // console.log(employee);
    return employee;

}
//Bob
createTimeInEvent(testEmployees[0], '2025-02-02 0900');
createTimeOutEvent(testEmployees[0], '2025-02-02 1100');
createTimeInEvent(testEmployees[0], '2025-02-03 0900');
createTimeOutEvent(testEmployees[0], '2025-02-03 1700');

//Jon
createTimeInEvent(testEmployees[1], '2025-02-02 0600');
createTimeOutEvent(testEmployees[1], '2025-02-02 1000');
createTimeInEvent(testEmployees[1], '2025-02-03 0600');
createTimeOutEvent(testEmployees[1], '2025-02-03 1600');

console.log(testEmployees[0]);

/* REWRITE
create a function that recieves an employee object and a date.
    find that date on his object.
    find the hours clocked in/out on that day.
    calculate the time difference between the start and end times.
    return that sum.
*/
function hoursWorkedOnDate(employeeObj, dateStamp) {
    const [getHourIn, getHourOut] = [employeeObj.timeInEvents.find(({ date }) => date === dateStamp).hour, employeeObj.timeOutEvents.find(({ date }) => date === dateStamp).hour];

    const hours = (getHourOut - getHourIn) / 100;

    // console.log(`Clock In: ${getHourIn}. Clock Out: ${getHourOut}`);
    // console.log(hours);

    return hours;

}

function wagesEarnedOnDate(employeeObj, dateStamp) {
    return hoursWorkedOnDate(employeeObj, dateStamp) * employeeObj.payPerHour;
}

// console.log(wagesEarnedOnDate(testEmployees[0], '2025-02-03'));

function allWagesFor(employeeObj) {
    let paymentOwed = 0;
    employeeObj.timeInEvents.forEach(event => {
        // console.log(event.date);
        // console.log(wagesEarnedOnDate(employeeObj, event.date));
        paymentOwed += wagesEarnedOnDate(employeeObj, event.date);
    })
    // console.log(paymentOwed);

    return paymentOwed;
}

// console.log(allWagesFor(testEmployees[0]));
// allWagesFor(testEmployees[0]);

function calculatePayroll(arrayOfEmployees) {
    let allWages = 0;

    arrayOfEmployees.map(employee => {
        const paymentOwedForSingleEmployee = allWagesFor(employee);
        allWages += paymentOwedForSingleEmployee;
    })
    return allWages;

}

// console.log(calculatePayroll(testEmployees));


// console.log(hoursWorkedOnDate(testEmployees[0], '2025-02-02'));
// console.log(hoursWorkedOnDate(testEmployees[0], '2025-02-03'));

// console.log(createTimeInEvent(employeeRecords, '2025-02-02 1500'));
// console.log(createTimeOutEvent(testEmployees[0], '2025-02-02 2000'));