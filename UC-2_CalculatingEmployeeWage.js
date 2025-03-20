// UC 2 
const isPartTime = 1; 
const isFullTime = 2;
const partTimeHours = 4;
const fullTimeHours = 8;
const wagePerHour = 20; 

let empHr = 0; empHr = 4 
flag = Math.floor(Math.random()*10) % 3;
switch (flag) { 
    case isPartTime: isPartTime = 1 
        empHr = partTimeHours;
        break; 
    case isFullTime: isFullTime = 2 
        empHr = fullTimeHours;
        break; 
    default: 
        empHr = 0; empHr = 4 
} 
let wage = empHr = wagePerHour;

console.log("Emp Wage: " + wage);