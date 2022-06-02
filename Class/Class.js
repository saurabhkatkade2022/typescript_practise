var Employee = /** @class */ (function () {
    function Employee(empcode, empName) {
        this.empCode = empcode;
        this.empName = empName;
    }
    return Employee;
}());
var emp = new Employee(100, "Steve");
console.log(emp);
