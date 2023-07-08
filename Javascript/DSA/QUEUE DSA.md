
# IMPLEMENT [[QUEUE DSA]] [[DSA]] :

```JAVASCRIPT
class Queue {
  constructor(){
    this.items={}
    this.rear=0
    this.front=0
  }

  enqueue(element){
    this.items[this.rear]=element
    this.rear++
  }

  dequeue(){
    const item=this.items[this.front]
    delete this.items[this.front]
    this.front++
    return item
  } 
}
```

this is the more optimised approach as compared to using array in items

# IMPLEMENT  [[CIRCULAR QUEUE]] DSA OF [[QUEUE]]

* its good when we have fixed number of items
* we need to define the capacity for it 
* ![[Pasted image 20230708174158.png]]
* 