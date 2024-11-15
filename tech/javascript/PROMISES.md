
TOPICS
* [[../../Atomic notes/Callbacks|Callbacks]]
* **[[PROMISES|Promises]]**
* **[[Async/Await|Async/Await]]**

## Why do we need promises in Javascript : 
let's understand this first by some basic topics 
## [[../../Atomic notes/Callbacks|Callbacks]]: 
   to understand promises we first need to understand callbacks.
   callbacks are functions that are passed as argument to another function and are        executed after some operation has been completed.
   
   example: 
```javascript
   function fetchData(callback) { 
   setTimeout(() => { console.log("Data fetched!"); 
   callback(); //after fetch data is executed then we call this
   }, 1000); } 
   
   fetchData(() => { console.log("Callback executed!"); });
```

this is good for handling async calls but can lead to a famous problem in `js` called 
___The Pyramid of doom___ also called `callback hell` of deeply nested callbacks, let's see 

example: 
```javascript 
fetchData(() => { 
	fetchMoreData(() => { 
		fetchEvenMoreData(() => { 
			console.log("All data processed!"); 
			}); 
		}); 
	});```

## Solutions to Avoid Callback Hell

To mitigate callback hell, developers often use:

- **Promises**: These provide a cleaner way to handle asynchronous operations without nesting.
- **Async/Await**: This syntax allows writing asynchronous code that looks synchronous, improving readability.

## Let's understand Promise
### States of a Promise

A promise can be in one of three states:

1. **Pending**: The initial state, meaning the promise is still being processed.
2. **Fulfilled**: The operation completed successfully, and the promise has a resulting value.
3. **Rejected**: The operation failed, and the promise has an error.

Using an analogy can make the concept of JavaScript promises much easier to understand. Let’s use the **online delivery** analogy:

## Online Delivery Analogy

Imagine you order a pizza online. Here’s how the process relates to a promise:

### 1. **Ordering the Pizza (Creating a Promise)**

When you place your order, you are essentially creating a promise. You tell the restaurant, "I want a pizza," and they promise to deliver it to you later.

- **Pending**: After you place your order, the restaurant is preparing your pizza. At this point, your order is in the **pending** state because you haven’t received it yet.

### 2. **Waiting for Delivery (Pending State)**

During this time, you might do other things while waiting for your pizza. The order is still being processed.

- You can think of this as the promise being in the **pending** state—it's not fulfilled or rejected yet.

### 3. **Pizza Delivered (Fulfilled State)**

Once the pizza is ready and delivered to your door, you receive it and enjoy your meal. This is like the promise being **fulfilled**.

- You can now say, "The pizza has arrived!" This corresponds to calling `.then()` on your promise to handle the successful outcome.

### 4. **Order Cancelled (Rejected State)**

Now, imagine that after waiting for some time, you get a call from the restaurant saying they can't deliver your pizza because they ran out of ingredients.

- This is like the promise being **rejected**. You can handle this situation by calling `.catch()` to deal with the error.

## Putting It Together

Here’s how it looks in terms of a promise:

1. **Order Pizza**: You create a promise.
2. **Pending**: The restaurant prepares your pizza.
3. **Fulfilled**: You receive your pizza and enjoy it (handled with `.then()`).
4. **Rejected**: The restaurant informs you they can’t fulfill your order (handled with `.catch()`).

,




