function taxCalculator(salary) {
  let grossPayMinusTax;
  if (salary <= 24000) {
    return (grossPayMinusTax = salary * 0.9);
  } else if (salary <= 32333 && salary >= 24001) {
    return (grossPayMinusTax = salary * 0.75);
  } else if (salary <= 500000 && salary >= 32334) {
    return (grossPayMinusTax = salary * 0.7);
  } else if (salary <= 800000 && salary >= 500001) {
    return (grossPayMinusTax = salary * 0.675);
  } else {
    return (grossPayMinusTax = salary * 0.65);
  }

  // NHIF RATE

  function calculateNhifRates() {
    if (grossPayMinusTax <= 5999) {
      return 150;
    } else if (grossPayMinusTax >= 6000 && grossPayMinusTax <= 7999) {
      return 300;
    } else if (grossPayMinusTax >= 8000 && grossPayMinusTax <= 11999) {
      return 400;
    } else if (grossPayMinusTax >= 12000 && grossPayMinusTax <= 14999) {
      return 500;
    } else if (grossPayMinusTax >= 15000 && grossPayMinusTax <= 19999) {
      return 600;
    } else if (grossPayMinusTax >= 20000 && grossPayMinusTax <= 24999) {
      return 750;
    } else if (grossPayMinusTax >= 25000 && grossPayMinusTax <= 29999) {
      return 850;
    } else if (grossPayMinusTax >= 30000 && grossPayMinusTax <= 34999) {
      return 900;
    } else if (grossPayMinusTax >= 35000 && grossPayMinusTax <= 35999) {
      return 950;
    } else if (grossPayMinusTax >= 40000 && grossPayMinusTax <= 44999) {
      return 1000;
    } else if (grossPayMinusTax >= 45000 && grossPayMinusTax <= 49999) {
      return 1100;
    } else if (grossPayMinusTax >= 50000 && grossPayMinusTax <= 59999) {
      return 1200;
    } else if (grossPayMinusTax >= 60000 && grossPayMinusTax <= 69999) {
      return 1300;
    } else if (grossPayMinusTax >= 70000 && grossPayMinusTax <= 79999) {
      return 1400;
    } else if (grossPayMinusTax >= 80000 && grossPayMinusTax <= 89999) {
      return 150;
    } else if (grossPayMinusTax >= 90000 && grossPayMinusTax <= 99999) {
      return 1600;
    } else {
      return 1700;
    }
  }
  calculateNhifRates();

  //NSSF
  function calculateNssf(pensionablePay) {
    if (pensionablePay <= 7000) {
      return `pensionablePay is ${pensionablePay * 0.06}`;
      if (pensionablePay >= 7001 && pensionablePay <= 36000) {
        return `pensionablePay is ${pensionablePay * 0.06}`;
      }
    }
  }
}
taxCalculator();
