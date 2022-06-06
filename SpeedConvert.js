// Beginner Series #4 Cockroach
// The cockroach is one of the fastest insects. Write a function which takes its speed in
// km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30



function cockroachSpeed(s) {
    //Good Luck!
    return Math.floor(s/0.036)
  }
  

//   const cockroachSpeed = s => Math.floor(s / 0.036);
  
  // conversion formula
  // // cm/s = km/h ÷ 0.036
  // p num
  // r a rounded to the floor num
  // e no edge cases
  // p i would just just a floor method and round it after getting the formula to convert the param