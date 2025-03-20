const isPartTime = 1;
const isFullTime = 2;
const partTimeHours = 4;
const fullTimeHours = 8;
const wagePerHour = 20;
const maxWorkingDays = 20;
const maxWorkingHours = 160;

function getWorkingHours(flag) {
    switch (flag) {
        case isPartTime:
            return partTimeHours;
        case isFullTime:
            return fullTimeHours;
        default:
            return 0;
    }
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = []; 

while (totalEmpHrs < maxWorkingHours && totalWorkingDays < maxWorkingDays) {
    totalWorkingDays++;
    let flag = Math.floor(Math.random() * 10) % 3;
    let dailyHours = getWorkingHours(flag);

    if (totalEmpHrs + dailyHours > maxWorkingHours) {
        dailyHours = maxWorkingHours - totalEmpHrs;
    }

    totalEmpHrs += dailyHours;
    let dailyWage = dailyHours * wagePerHour;
    empDailyWageArr.push(dailyWage);

    console.log(`Day ${totalWorkingDays}: Work Hours = ${dailyHours}, Employee Wage = ${dailyWage}`);
}

// **UC 7A - Calculate Total Wage using forEach traversal**
let totEmpWage = 0;
function sum(dailyWage) {
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days: " + totalWorkingDays + 
            " Total Hrs: " + totalEmpHrs + 
            " Emp Wage: " + totEmpWage);

// **UC 7A - Calculate Total Wage using reduce method**
function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC7A Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));
