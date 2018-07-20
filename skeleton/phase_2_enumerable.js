Array.prototype.myEach = function(callback) {
  for(i = 0; i < this.length; i++){
    callback(this[i]);
  }
};

// function myAdd1(el) {
//   console.log(el + 1);
//   return(el + 1);
// }

let a = [1,2,3,4,5];

// a.myEach(function(el) {
//   console.log(el + 1);
//   return(el + 1);
// });

// Array.prototype.myMap = function(callback) {
//   let dup = this.slice();
//   let result = dup.myEach(callback);
//   return dup;
// };

Array.prototype.myMap = function(callback) {
  let result = [];
  this.myEach(function(el) {
    result.push(callback(el));
  });
  return result;
};

let b = a.myMap(function(el) {
  console.log(el + 1);
  return(el + 1);
});

console.log(b);
console.log(a);

Array.prototype.myInject = function(callback, acc) {
  let idx;
  if(acc === undefined){
    acc = this[0];
    idx = 1;
  }
  else{
    idx = 0;
  }
  for(i = idx; i < this.length; i++){
    acc = callback(acc, this[i]);
  }
  return acc;
};

console.log(b.myInject(function(acc, el){
  return acc + el;
}, 8)
);

console.log("B=" + b);




