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
    }

    return employeeObj;
}