//uc-5 : Calculate Wages till a condition of total working hours of 160 or max days of 20 is reached for a month
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

// Loop until either max working hours (160) or max working days (20) is reached
while (totalEmpHrs < maxWorkingHours && totalWorkingDays < maxWorkingDays) {
    totalWorkingDays++;
    let flag = Math.floor(Math.random() * 10) % 3;
    let dailyHours = getWorkingHours(flag);
    
    if (totalEmpHrs + dailyHours > maxWorkingHours) {
        dailyHours = maxWorkingHours - totalEmpHrs; 
    }

    totalEmpHrs += dailyHours;
    console.log(`Day ${totalWorkingDays}: Work Hours = ${dailyHours}, Total Hours = ${totalEmpHrs}`);
}

let monthlyWage = totalEmpHrs * wagePerHour;
console.log("Total Days Worked: " + totalWorkingDays);
console.log("Total Hours Worked: " + totalEmpHrs);
console.log("Total Monthly Wage: " + monthlyWage);