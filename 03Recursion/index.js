// const sum = (num) => {
//   if (num > 0) {
//     return num + sum(num - 1);
//   } else {
//     return num;
//   }
// }
// console.log(sum(10));


const sum = (from, to) => {

  if (from < to) {
    return from + sum(from + 1, to);
  } else {
    return to;
  }
}

console.log(sum(1, 10));