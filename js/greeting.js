var today = new Date();
var hourNow = today.getHours();
var greeting;

// Display the appropriate greeting based on the current time
if (hourNow > 18) {
  greeting = 'Good evening';
} else if (hourNow > 12) {
  greeting = 'Good afternoon';
} else if (hourNow > 0) {
  greeting = 'Welcome';
}
document.write(greeting);
