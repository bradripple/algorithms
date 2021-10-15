function merge(left, right) {
    var result = [],
        iLeft = 0,
        iRight = 0;
    
    while (iLeft < left.length && iRight < right.length) {
      if (left[iLeft] < right[iRight]) {
        result.push(left[iLeft++]);
      } else {
        result.push(right[iRight++]);
      }
    }
    
    return result.concat(left.slice(iLeft)).concat(right.slice(iRight));
  }
  
  function mergeSort(arr) {
    if (arr.length < 2) {
      return arr;
    }
    
    var middle = Math.floor(arr.length / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    
    return merge(mergeSort(left), mergeSort(right));
  }
  
  console.log(mergeSort([6,7,3,2,8,9,1,4,5]))
//   var console = document.querySelector(".console");
  
//   console.innerHTML = mergeSort([6,7,3,2,8,9,1,4,5]);
  
  