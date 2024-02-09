function fibs(n) {
  if (n === 0) {
    console.log("There's no sequence!!!");
  } else if (n === 1) {
    console.log([0]);
  } else {
    let x = 0;
    let y = 1;
    let arr = [0, 1];
    for (let i = 2; i < n; i++) {
      let z = x + y;
      x = y;
      y = z;
      arr.push(y);
    }
    console.log(arr);
  }
}

function fibsRec(n) {
  if (n === 0) return 'There is no sequence!!!';
  else if (n === 1) return [0];
  else if (n === 2) return [0, 1];
  else {
    let arr = fibsRec(n - 1);
    let newNum = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(newNum);
    return arr;
  }
}

fibs(8); // [0, 1, 1, 2, 3, 5, 8, 13]
fibsRec(8); // [0, 1, 1, 2, 3, 5, 8, 13]
