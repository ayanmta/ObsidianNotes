[[JS]]

```JAVASCRIPT
const arr = [1, 2, 3, 4, 5];

const arr2 = ["ayabn", "mehta"];

  

// see what filter does

const num = arr.filter((item, index, array) => {

  return item / 2;

});

console.log(num, "filter result");

  

// map through array

const nums = arr.map((item, index, array) => {

  return item * 2;

});

const concc = arr.concat(arr2);

const concc2 = arr.slice(-2);

console.log(concc, concc2, "concat two array");

  

//findindex: find the element based on its index by callback to itrate each element

const ind = arr.findIndex((item) => item === 2);

console.log(ind, "find indx");

  

// flat

const flatx = [1, 2, 3, [4, 5, [6, 7]]];

  

const flee = flatx.flat(1);

console.log(

  "flat method to flatten array and we can pass number to show how much deep we want to go "

);

console.log(flee);

 ``` 

# Q/A section

  

### Q1: Print second largest num from array

  //input: [10,15,2,23,40]   ----> output: 23
  //input: [0,5,2,40]   ----> output: 5
//trying (o (log n)) time comp using inbuilt java

```JavaScript
const inputArr = [10, 15, 2, 23, 40];

  

function secondLargest(arr) {

  const uniqArr = new Set(arr);

  //set : create the set of unique array and complexity of

  //making set is O(n) , value may differ as set donot maintain insertion order

  //to overcome this issue  

  console.log(uniqArr);

}

  

secondLargest(inputArr);
```
