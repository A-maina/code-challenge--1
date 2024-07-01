function studentGradeGenerator() {
  let marks = prompt("Enter students marks");
  //If marks is greater than 79, it returns grade A.

  if (isNaN(marks) || marks < 0 || marks > 100) {
    return " type a number between 0 to 100";
  }

  if (marks > 79 && marks <= 100) {
    return "A";
  }

  //If marks is greater than6 0 and less than 79, it returns grade B.
  else if (marks >= 60 && marks <= 79) {
    return "B";
  }

  // If marks is greater than 49 and less than 59, it returns grade C.
  else if (marks <= 59 && marks > 49) {
    return "C";
  }

  // If marks is greater than 40 and less than 49. it returns grade D.
  else if (marks >= 40 && marks < 49) {
    return "D";
  }
  //If mark is less than 40, it returns grade E.
  else {
    return "E";
  }
}
