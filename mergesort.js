function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    let mid = arr.length / 2;
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
  }
}

function merge(left, right) {
  let temp = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      temp.push(left[i]);
      i++;
    } else {
      temp.push(right[j]);
      j++;
    }
  }
  temp.push(...left.slice(i));
  temp.push(...right.slice(j));
  return temp;
}

let list1 = [3, 2, 1, 13, 8, 5, 0, 1];
let list1Merge = mergeSort(list1);
console.log(list1Merge); // [0, 1, 1, 2, 3, 5, 8, 13]

let list2 = [105, 79, 100, 110];
let list2Merge = mergeSort(list2);
console.log(list2Merge); // [79, 100, 105, 110]
