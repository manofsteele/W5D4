function myUnique(array) {
  let result = [];
  array.forEach(function(element) {
    if(!result.includes(element)){
      result.push(element);
    }
  });
  return result;
}

console.log(myUnique([1,3,3,4,6,6,7]));

function myTwoSum(array) {
  let result = [];
  for(i = 0; i < array.length - 1; i++){
    for(j = i + 1; j < array.length; j++){
      if(array[i] + array[j] === 0){
        result.push([i, j]);
      }
    }
  }
  return result;
}

console.log(myTwoSum([1,-1,2,3,4,8,-2,-3,12]));

function myTranspose(array) {
  let result = [];
  for(i = 0; i < array[0].length; i ++) {
    result.push(Array(array.length));
  }
  
  for(i = 0; i < array.length; i ++) {
    for(j = 0; j < array[0].length; j ++) {
      result[j][i] = array[i][j];
    }
  }
  return result;
}

console.log(myTranspose([[1,2,4],[3,4,5]]));
