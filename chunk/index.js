// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   let arr =[]
//   for(let i=0;i<array.length-1;i++){
//      const last = arr[arr.length-1]
//      if(!last || last.length == 2){
//        arr.push([array[i]])
//      }
//      else {
//        last.push(array[i])
//      }
//   }
//   return arr
//
// }


function chunk(array, size) {
  let arr =[];
  let i = 0;

  while(i < array.length){
      arr.push(array.slice(i,i+size));
      i += size
  }

  return arr

}

module.exports = chunk;
