[[interview questions]]

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
//set : create the set of unique array and complexity of

  //making set is O(n) , value may differ as set donot maintain insertion order

  //to overcome this issue  

```JavaScript
const inputArr = [10, 15, 2, 23, 40];

function secondLargest(arr) {

  const uniqArr = Array.from(new Set(arr));

  //set : create the set of unique array and complexity of

  //making set is O(n) , value may differ as set donot maintain insertion order

  //to overcome this issue

  uniqArr.sort((a, b) => {

    return b - a;

  });

  

  if (uniqArr.length >= 2) {

    return uniqArr[1];

  } else {

    return -1;

  }

}

console.log(secondLargest(inputArr), "secondlargest");

```


this has 0(logn) complexity 
	lets try to optimize ---> secondLargestOptimised();
	
```JavaScript
const arr = [12,35,1,45,67,89,44]
function secondLargestOptimised(arr){
let largest = -1
let secondLargest = -1

for(let i=0;i<arr.length; i++){
if(arr[i]>largest){
	secondLargest = largest
	largest = arr[i]
}else if(arr[i]!=largest && arr[i]>secondLargest)
{
	secondlargest = arr[i]
}
}
return secondLargest
}
console.log(secondLargestOptimised(arr))
```

this way we remove the o(logn) complexity of sort and keep the o(n)

Q2> ROTATE ARRAY BY K?

input: nums=[1,2,3,4,5,6,7]

```JavaScript

let nsums = [1,2,3,4,5,6,7]

const nsmus = [1, 2, 3, 4, 5, 6, 7];

  

function rotateArray(nsmus, k) {

  let lastNum;

  

  for (let i = 0; i < k; i++) {

    lastNum = nsmus[nsmus.length - 1];

    console.log(lastNum);

    nsmus.pop();

    nsmus.unshift(lastNum);

  }

  return nsmus;

}

console.log(rotateArray(nsmus,4))
```




##### optimised approach
lets say k= 4
	* reverse array [1, 2, 3, 4, 5, 6, 7] => [7,6,5,4,3,2,1] 
	*  now reverse the k [7,6,5,4,3,2,1] =>[4,5,6,7,3,2,1]
	* now reverse after k whole array [4,5,6,7,1,2,3]
* instead of o(n) we can do it in 3 steps

```javascript
let nsums = [1,2,3,4,5,6,7]

function optimisedReverse(nsums){

}
```




##### optimised approach
lets say k= 4
	* reverse array [1, 2, 3, 4, 5, 6, 7] => [7,6,5,4,3,2,1] 
	*  now reverse the k [7,6,5,4,3,2,1] =>[4,5,6,7,3,2,1]
	* now reverse after k whole array [4,5,6,7,1,2,3]
* instead of o(n) we can do it in 3 steps

```javascript
let nsums = [1,2,3,4,5,6,7]

function optimisedReverse(nsums){

}





##### optimised approach
lets say k= 4
	* reverse array [1, 2, 3, 4, 5, 6, 7] => [7,6,5,4,3,2,1] 
	*  now reverse the k [7,6,5,4,3,2,1] =>[4,5,6,7,3,2,1]
	* now reverse after k whole array [4,5,6,7,1,2,3]
* instead of o(n) we can do it in 3 steps

```javascript
let nsums = [1,2,3,4,5,6,7]

function optimisedReverse(nsums){

}
