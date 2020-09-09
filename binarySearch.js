(() => {
  function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);
    while (arr[mid] !== val && start < end) {
      if (arr[mid] > val) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
      mid = Math.floor((start + end) / 2);
    }
    return mid;
  }
  console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 11, 99], 5));
})();
