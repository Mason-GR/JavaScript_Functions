console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
  if (count <= 0) {
    count *= -1;
  }
  for (let i = 1; i < count; i++) {
    if (i % 2 == 1) {
      console.log(i);
    } else {
      continue;
    }
  }
}

printOdds(-100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(age, userName) {
  // if (age = 0) {
  //     console.log("Please input your age and name.")
  // } else if (userName = " ") {
  //     console.log(`${userName} is not a valid name please try again.`)
  // }
  let aboveSixteen = `Congrats ${userName}, you can drive!`;
  let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
  // let noUserName = "Please input a valid name to continue.";
  if (age >= 16) {
    console.log(aboveSixteen);
  } else {
    console.log(belowSixteen);
  }
}

checkAge(30, "Mason Gregory");

//Assign a function to a variable
let printEvens = function (countUp) {
  for (let num = 1; num < countUp; num++) {
    if (num % 2 == 0) {
      console.log(num);
    } else {
      continue;
    }
  }
};

printEvens(100)

//Pass a function as a parameter(argument)


//Return a function from a function
