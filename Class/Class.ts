class Employee {

    empCode: number;
    empName: string;
    
    constructor(empcode: number, empName: string ) {
            this.empCode = empcode;
            this.empName = empName;
    }
}

let emp = new Employee(100,"Steve");

console.log(emp);