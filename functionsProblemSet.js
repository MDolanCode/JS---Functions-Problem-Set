//Functions Problem Set

//isEven
//write a function isEven() which takes a single numeric arguement and returns true if even and false otherwise

//isEven(4); //true
//isEven(21); //false
//isEven(68); //true
//isEven(333); //false

function isEven(num) {
  if(num % 2 === 0) {
    return true;
  }
  else {
    return false;
  }
}

//shorter more efficient
function isEven(num) {
  return num % 2 === 0;
}

//factorial()
//write a function factorial() which takes a single numeric argument and returns the factorial of that number

//4! is 4 x 3 x 2 x 1
//6! is 6 x 5 x 4 x 3 x 2 x 1
//0! is 1
//factorial(5); //120
//factorial(2); //2
//factorial(10); //3628800
//factorial(0); //1

//longer version 1
function factorial(num) {
  if(num === 0 || num === 1) {
    return 1;
  }
  for(var i = num -1; i >= 1; i--) {
    num = num * i;
  }
  return num;
}

//longer version 2
function factorial(num) {
  if(num === 0) {
    return 1;
  }
  for(var i = num -1; i >= 1; i--) {
    num = num * i;
  }
  return num;
}

//shorter more efficient version
function factorial(num) {
  //define a result variable
  var result = 1;
  //calculate factorial and store value in results
  for(var i = 1; i <= num; i++) {
    result *= i;
  }
  //return rrsult of variable
  return result;
}

//kebabToSnake()
//write a function kebabToSnake() which takes a single kebab-cased string arguement and returns the snake_cased version

//Basically, replace "-" with "_"
//kebabToSnake("hello-world"); //"hello_world"
//kebabToSnake("dogs-are-awesome"); //dogs_are_awesome
//kebabToSnake("blah"); //"blah"

//replace "-" with "_"
//return str
function kebabToSnake(str) {
  var myString = str.replace(/-/g, "_");
  return myString;
}
