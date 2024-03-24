// Function to calculate tax (PAYE) based on the provided salary
function calculateTax(salary) {
    let tax = 0;

    if (salary <= 24000) {
        tax = 0.1 * salary;
    } else if (salary <= 32333) {
        tax = 2400 + 0.25 * (salary - 24000);
    } else if (salary <= 40333) {
        tax = 5108 + 0.3 * (salary - 32333);
    } else if (salary <= 48333) {
        tax = 8941 + 0.32 * (salary - 40333);
    } else if (salary <= 98333) {
        tax = 13541 + 0.34 * (salary - 48333);
    } else if (salary <= 658333) {
        tax = 33741 + 0.35 * (salary - 98333);
    } else {
        tax = 213541 + 0.4 * (salary - 658333);
    }

    return tax;
}

// Function to calculate NHIF deductions based on the provided salary
function calculateNHIF(salary) {
    let nhif = 0;

    if (salary <= 5999) {
        nhif = 150;
    } else if (salary <= 7999) {
        nhif = 300;
    } else if (salary <= 11999) {
        nhif = 400;
    } else if (salary <= 14999) {
        nhif = 500;
    } else if (salary <= 19999) {
        nhif = 600;
    } else if (salary <= 24999) {
        nhif = 750;
    } else if (salary <= 29999) {
        nhif = 850;
    } else if (salary <= 34999) {
        nhif = 900;
    } else if (salary <= 39999) {
        nhif = 950;
    } else if (salary <= 44999) {
        nhif = 1000;
    } else if (salary <= 49999) {
        nhif = 1100;
    } else if (salary <= 59999) {
        nhif = 1200;
    } else if (salary <= 69999) {
        nhif = 1300;
    } else if (salary <= 79999) {
        nhif = 1400;
    } else if (salary <= 89999) {
        nhif = 1500;
    } else if (salary <= 99999) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }

    return nhif;
}

// Function to calculate NSSF deductions based on the provided salary
function calculateNSSF(salary) {
    // NSSF rate is 6% of gross salary
    return 0.06 * salary;
}

// Function to calculate net salary based on basic salary and benefits
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const tax = calculateTax(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);
    const netSalary = grossSalary - tax - nhif - nssf;

    return {
        grossSalary,
        tax,
        nhif,
        nssf,
        netSalary
    };
}

// Example usage
const basicSalary = 50000; // Example basic salary
const benefits = 10000; // Example benefits
const result = calculateNetSalary(basicSalary, benefits);
console.log("Gross Salary:", result.grossSalary);
console.log("Tax:", result.tax);
console.log("NHIF Deductions:", result.nhif);
console.log("NSSF Deductions:", result.nssf);
console.log("Net Salary:", result.netSalary);