(()=> {
   function linearSearch (arr, val) {
       for (let i = 0; i < arr.length; i++) {
           if (arr[i] === val) return val;
       }
       return -1;
   }
   console.log(linearSearch(['99', 'a', 'v', 3, ], 0));
})();