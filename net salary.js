function taxCalculator(salary) {
    const monthlyTaxablePay = salary;
    if (monthlyTaxablePay <=24000 ) {
       return `total is ${monthlyTaxablePay * 0.1}`; 
    }
    else if (monthlyTaxablePay <= 32333 && monthlyTaxablePay >= 24001) {
        return `total is ${monthlyTaxablePay * 0.25}`;
    }
    else if (monthlyTaxablePay <= 500000 && monthlyTaxablePay >= 32334) {
        return `total is ${monthlyTaxablePay * 0.30}`;
    }
    else if (monthlyTaxablePay <= 800000 && monthlyTaxablePay >= 500001) {
        return `total is ${monthlyTaxablePay * 0.325}`;
    }
    else {
        return`total is ${monthlyTaxablePay * 0.35}`;
    }
}

// NHIF RATE

function calculateNhifRates(grossPay) {
    let deduction = 0;

    if (grossPay<= 5999) {
        return deduction = 150;  
    }
    else if (grossPay >= 6000 && grossPay <= 7999) {
        return deduction = 300; 
    }
    else if (grossPay >= 8000 && grossPay <= 11999) {
       return deduction = 400; 
    }
    else if (grossPay >= 12000 && grossPay <=14999) {
        return deduction = 500;
    }
    else if (grossPay >= 15000 && grossPay <= 19999) {
        return deduction = 600;
    }
    else if (grossPay >= 20000 && grossPay <= 24999) {
        return deduction = 750;
    }
    else if (grossPay >= 25000 && grossPay <= 29999) {
        return deduction = 850;
    }
    else if (grossPay >= 30000 && grossPay <= 34999) {
        return deduction = 900;
    }
    else if (grossPay >= 35000 && grossPay <= 35999) {
        return deduction = 950;
    }
    else if (grossPay >= 40000 && grossPay <=44999) {
        return deduction = 1000;
    }
    else if (grossPay >= 45000 && grossPay <= 49999) {
        return deduction = 1100;
    }
    else if (grossPay >= 50000 && grossPay <= 59999) {
        return deduction = 1200;
    }
    else if (grossPay >=60000 && grossPay <= 69999) {
        return deduction = 1300;
    }
    else if (grossPay >= 70000 && grossPay <= 79999) {
        return deduction = 1400;
    }
    else if (grossPay >= 80000 && grossPay <= 89999) {
        return deduction = 1500;
    }
    else if (grossPay >= 90000 && grossPay <= 99999) {
        return deduction = 1600;
    }
    else {
        return deduction = 1700;
    }
}
//NSSF
function calculateNssf(pensionablePay) {
    if (pensionablePay <= 7000) {
        return `pensionablePay is ${pensionablePay * 0.06}`;
   if (pensionablePay >= 7001 && pensionablePay <=36000) {
         return `pensionablePay is ${pensionablePay * 0.06}`;   
        }
    }
    
}