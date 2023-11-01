function ridRepeatArr(arr){ 
  let obj = {};
  let result = [];

  for (let i = 0; i < arr.length; i++) { 
    let content = arr[i];
    if (!obj.hasOwnProperty(content)) { 
      obj[content] = true;
      result.push(content);
      
    }
  }
  console.log(obj);
  return result;
}

let arr = [1, 2, 3, 4, 5, 3, 2];
let uniqueArr = ridRepeatArr(arr);
console.log(uniqueArr);