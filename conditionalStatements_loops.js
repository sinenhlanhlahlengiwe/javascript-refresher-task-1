//exercise 1 : temp check

/*1.*/
let temp = 8;
if (temp < 0) {
    console.log("It's freezing");
}

if (temp >= 0 && temp <= 15);
console.log("it's cold"); {
}

if (temp >= 16 && temp <= 25);
console.log("it's mild"); {
} 

if (temp > 25) {
console.log("it's warm");
}

/*2.*/
switch (true) {
    case temp < 0:
      console.log("It's freezing");
      break;
    case temp >= 0 && temp <= 15:
      console.log("It's cold");
      break;
    case temp >= 16 && temp <= 25:
      console.log("It's mild");
      break;
    case temp > 25:
      console.log("It's warm");
      break;
  }
  

//exercise 2
/*1. */
let number = 15;

if (number % 2 === 0 && number % 3 === 0) {
  console.log("Divisible by both.");
} else if (number % 2 === 0) {
  console.log("Divisible by 2.");
} else if (number % 3 === 0) {
  console.log("Divisible by 3.");
} else {
  console.log("Not divisible by 2 or 3.");
}
/*2. */

switch (true) {
    case number % 2 === 0 && number % 3 === 0:
      console.log("Divisible by both.");
      break;
    case number % 2 === 0:
      console.log("Divisible by 2.");
      break;
    case number % 3 === 0:
      console.log("Divisible by 3.");
      break;
    default:
      console.log("Not divisible by 2 or 3.");
  }
  
  //exercise 3: For loops
  /*1. */ for (let i = 1; i <= 10; i++) {
  console.log(i);
}
/*2. */ for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}
/*3.*/ let sumOf = 0;
for (let i = 1; i <= 100; i++) {
    sumOf += i;
  }
  console.log(sumOf);

/*4.*/ const numbrs = [1, 2, 3, 4, 5];
for (let i =0; i < numbers.length; i ++) {
    console.log(numbrs[i]);
}
/*5.*/ const numbers = [3, 7, 2, 5, 10, 6];
let largestNum = number[0];
for (let i = 1; i <numbers.length; i++) {
    if (numbers[i] > largestNum) {
        largestNum = numbers[i]
    }
}
console.log(largestNum);

//exercise 4
/*1. */ let h = 1;
        while (h <= 10) {
            console.log(h);
            h++;
        }

/*2.*/ let g =2;
        while (g <= 20) {
            console.log(g);
            g += 2;
        }

/*3.*/ let theSumOf = 0;
        let k = 1;
        while (k <= 100) {
            theSumOf += k;
            k ++
        }
        console.log(theSumOf);

/*4.*/ let j = 5;
        while (j < 50) {
            console.log(j);
            j += 5;
        }
//exercise 5: do while

/*1.*/ let f = 1;
do {
    console.log(f);
    f++;
} while (f <= 10);

/*2*/ let sum = 0;
        let i = 1;
        do {
            sum += i;
            i ++;
        } while (i <= 100);
        console.log(sum);

/*3.*/ let num;
        do {
            num = prompt("Enter a number greater than 10:");
        } while (num<= 10);
        console.log("Valid number: ", num);


/*4.*/ let correctNumber = 5;
        let guess;
        do {
            guess = prompt("Guess a number between 1 to 10:");
        } while (guess != correctNumber);
        console.log("Correct! This answer is ", correctNumber)


