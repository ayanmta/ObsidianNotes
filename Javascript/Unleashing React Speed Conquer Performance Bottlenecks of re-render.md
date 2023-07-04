
Defining functions within the component body leads to the creation of a new function with each render: if this function is passed as a prop, it will cause the child components to re-render unnecessarily.

Using an index as a key can lead to unnecessary re-renders and potential issues with the state