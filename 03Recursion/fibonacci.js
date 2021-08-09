//

const fibonacci = num => {
  if (num <2) {
    return num;
  } else {
    return fibonacci(num-1) + fibonacci(num-2);
  }
}


const num = 5;

if (num >=0) {
  for(let i =0; i<num; i++) {
    console.log(fibonacci(i));
  } 
} else {
  return 1;
}