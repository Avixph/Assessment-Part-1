// Part 1: 30%, you must create a repo for part 1, separate from part 2

// Why does React utilize the virtual-dom?
// React uses a virtula DOM for perfomance enhancing reasons, since it's much faster than the regular DOM.

// 2a How is data flowed in React? 2b. Why is React architected this way?
// In react data flows in one dirrection, One-way data flow.
// React is architected this way because it keeps the data fast and modular since only the parent componet updates the data.

// 3. What is the purpose for lifting state up in React? Give an example of this
// The purpose of lifting state up is to make the state of the parent component as the "single source of truth" and allows it to pass data to its children.

// 4. Why would a startup be interested in applying React-Routing to a project? Explain in detail.

// 5. Can browsers read JSX? Why?
// JSX is how React runs HTML in JavaScript, its a syntax extension for javascript.
// Web browsers cant read it directly. So in order for the browser to read JSX it needs to be transpiled.
// So before the file gets to the web browser a JSX compiler will translate any JSX into vanilla Javascript.
// Therefore making it accesibile for the browser to read JSX and javascript.

// 6. What is the significance of keys in React?
// Keys are significant in react because a key is a string attribute that is needed when creating list of elements.
// Keys help React identify items that have change, are added, or removed.
// Keys are to be given to elements inside an array to give them an identity.
// So in short, keys are important because they allow array elements to form their own identity making it easier to access the list of elements in an array.

// 7. What is the difference between Props and State?
// The differences between Props and State are vast.
// First state is data that is maintained inside a component. 
// It can either be local or owned by that specific component.
// The component will then update the state using setState functionality.Now for props, props is where data is passed from a parent component.
// Props are only read in the child component.Props can also take callback functions inside the child component to initiate an update.
// So the difference comes in for the component that owns the data.
// If the data is owned locally and updated by the component its self then that is State.
// If the data is updated by a callback function being passed to child or data is owned by a parent component then its Props.

// 8. Examine the code below: In relation to React, explain what is occurring, and why it’s significant.

// Babel Input: ES2015 arrow function
// [1, 2, 3].map( n => n + 1 )

// Babel Output: ES5 equivalent
// [1,2,3].map(function(n) {
// Return n + 1;
// })

// 9. Given an array of strings, names, return a new array with each name properly capitalized. Must use .map()
// Show 3 test runs, with at least 2 edge cases.
function properNames(names) {
  return names.map(function (nameStr) {
    return nameStr.split(" ").map(function (word) {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
  });
}

console.log(properNames(["angel", "shafee", "jennifer"]));

// 10. Given an array of strings, return a new array that only includes those that are 6 characters or fewer in length. Must use .filter()
// Show 3 test runs, with at least 2 edge cases.
function smallWordsOnly(arr) {
  return arr.filter(function (int) {
    return int.length < 6;
  });
}
