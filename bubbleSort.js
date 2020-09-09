(() => {
  function bubbleSrot(arr) {
    for (let i = arr.length; i > 0; i--) {
      let noSwap = true;
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          console.log(arr[j], arr[j + 1]);
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          noSwap = false;
        }
      }
      console.log("Pass completed");
      if (noSwap) break;
    }
    return arr;
  }
  console.log(bubbleSrot([1, 2, 3, 11, 4, 5, 9, 7, 8]));
})();
