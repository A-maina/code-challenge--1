
function speedDetector() {

const speed = prompt("Enter speed of Car")

if (speed < 70) {
    return "OK"; 
}
else {
    let demeritPoints =Math.floor((speed -70)/ 5);
if (demeritPoints>12) {
        return "License Suspended";  
    }
else {
     return `Points: ${demeritPoints}`;
}
  }
    
}