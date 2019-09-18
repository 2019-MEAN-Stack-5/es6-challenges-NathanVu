//assign fizzBuzz30 an arrow function that does not take any inputs.  fizzBuzz30 should output an array of all the numbers from
//1 through 30 replacing numbers divisible by 3 with 'fizz', numbers divisible by 5 with 'buzz' and numbers divisible by 3 and 5 with
//'fizzbuzz'

// let fizzBuzz30;


const fizzBuzz30 = () =>
{
let arr = [];
for (i = 0; i < 30; i++) {
  if(i%15==0) console.log("FizzBuzz");
  else if (i % 3 == 0) arr.push("Fizz");
  else if (i & 5 == 0) arr.push("Buzz");
  else arr.push(i);
}

}

fizzBuzz30(1);


//Do not edit
module.exports = fizzBuzz30;
