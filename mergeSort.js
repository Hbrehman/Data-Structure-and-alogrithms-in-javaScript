(function () {
  function merge(arr1, arr2) {
    let newArr = [],
      i = 0,
      j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        newArr.push(arr1[i]);
        i++;
      } else {
        newArr.push(arr2[j]);
        j++;
      }
    }
    while (i < arr1.length) {
      newArr.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      newArr.push(arr2[j]);
      j++;
    }
    return newArr;
  }

  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }

  console.log(mergeSort([78, 76, 1, 10, 50, 3, 2, 14, 99, 100]));
})();
