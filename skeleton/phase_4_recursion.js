function range(start, end) {
  if(start === end){
    return [start]; 
  }
  let result = range(start + 1, end);
  result.unshift(start);
  return result;
  // return range(start + 1, end).unshift(start);
}

console.log(range(2,5));

function sumRec(arr){
  if(arr.length === 1){
    return arr[0];
  }

  return sumRec(arr.slice(1)) + arr[0];
}

// const sumRec = arr => (
//   arr.length > 1 ? arr[0] : sumRec(arr.slice(1)) + arr[0]
// );

console.log(sumRec([1,2,3,4,5]));


function exponent(base, exp) {
  if(exp <= 1) {
    return base;
  }
  return base * exponent(base, exp -1);
}

console.log(exponent(2, 8));

function exponent2(base, exp) {
  if(exp === 0){
    return 1;
  }
  else if (exp === 1) {
    return base;
  }
  else if (exp % 2 === 0) {
    expEven = exponent2(base, exp/2);
    return expEven * expEven;
  }
  else {
    expOdd = exponent2(base, (exp-1)/2);
    return base * expOdd * expOdd;
  }
}

console.log(exponent2(2, 8));
console.log(exponent2(3, 5));

function fibonacci(n) {
  if(n === 1){
    return [0];
  }
  if(n===2){
    return [0,1];
  }
  else {
    result = fibonacci(n - 1);
    result.push(result[result.length - 1] + result[result.length - 2]);
    return result;
  }
}

console.log(fibonacci(5));
console.log(fibonacci(10));

var getType = function (elem) {
  return Object.prototype.toString.call(elem);
};

function deepDup(arr) {
  let result = [];
  arr.myEach(function(el){
    if(getType(el) === "[object Array]"){
      result += deepDup(el);
    }
    else {
      result.push(el);
    }
  });
  return result;
}


console.log(deepDup([[],[[7, 2], 3],6, 8]));
