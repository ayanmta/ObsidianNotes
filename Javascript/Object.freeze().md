
Object.freeze()


```JAVASCRIPT 
const deepObj = {

  name: "ayan",

  nested: {

    lastName: "mehta",

  },

  nested2: {

    age: "25",

  },

};

  

Object.freeze(deepObj);

  

//object is immutable

  

deepObj.name = "mehta";

  

console.log(deepObj.nested.last);

  

//deep nesting is not immutable

  

deepObj.nested.lastName = "ayan";

  

console.log(deepObj.nested.lastName);

  

//how acn we achieve deep Freeze so that nested object is also immutable

  

function deepFreeze(obj) {

  Object.freeze(obj);

  

  for (const key in obj) {

    if (obj.hasOwnProperty(key) && typeof obj[key] === "object") {

      deepFreeze(obj[key]);

    }

  }

}

  

deepFreeze(deepObj);

deepObj.nested2.age = "changed";

  

console.log(deepObj.nested2.age);
```