Array.prototype.bubbleSort = function() {
  let sorted = false;
  while(!sorted) {
    sorted = true;
    for (i = 0; i < this.length - 1; i++) {
      if(this[i + 1] < this[i]){
        temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
        sorted = false;
      } 
    }
  }
  return this;
};

console.log([1,5,3,5,2,-1].bubbleSort());

String.prototype.substrings = function() {
  result = [];
  for(i = 0; i < this.length; i++){
    for(j = i; j < this.length; j++){
      result.push(this.slice(i, j + 1));
    }
  }
  return result;
};


console.log(myUnique("concatenate".substrings()).bubbleSort());