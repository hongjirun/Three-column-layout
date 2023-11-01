function ridRepeatArr(arr) { 
  let result = [];
  result = Array.from(new Set(arr));
  return result;
}

let arr = [1, 2, 3, 4, 5, 3, 2];
let uniqueArr = ridRepeatArr(arr);
console.log(uniqueArr);