
#express  #javascript  #tech/javascript 

# - [What is the Event Loop?](https://www.geeksforgeeks.org/node-js-event-loop/#what-is-the-event-loop)


#  Why [[Event Loop |Event Loop ]]is important?
# - [Features of Event Loop](https://www.geeksforgeeks.org/node-js-event-loop/#features-of-event-loop)
 * it is a endless loop , waits for the tasks from event queue 
 * only executes them when the callstack is empty.
 * in case of multiple tasks, it executes starting from the odest first.

event loop async operations are performed by libuv library
# - [Working of the Event loop?](https://www.geeksforgeeks.org/node-js-event-loop/#working-of-the-event-loop)
event loop async operations are performed by libuv library
* it gives [[thread pool|thread pool]] known as lib uv thread pool used to manage a special thread pool which is hard for event loop
*
![[../../Pasted image 20240914163944.png|Pasted image 20240914163944]]
# - [Phases of the Event loop](https://www.geeksforgeeks.org/node-js-event-loop/#phases-of-the-event-loop)
# - [Conclusion](https://www.geeksforgeeks.org/node-js-event-loop/#conclusion)
































