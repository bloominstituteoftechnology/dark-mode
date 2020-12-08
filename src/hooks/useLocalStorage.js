import { useState, useEffect } from "react";


// This function checks the saved value for the useLocalStorage function. Whatever we call useLocalStorage on will have it's value checked
//against the info that exists in our application's local storage. I also included a alternative way of returning the value. Because 
// useState can accept a function we need a way of determining wether we passed a function when calling useLocalStorage. 

function getSavedValue(key, initialValue) {
  // check local storage at key provided and set the value to savedValue
  const savedValue = JSON.parse(localStorage.getItem(key));
  // If a value exists return it;
  if (savedValue) return savedValue;
  // If the initial value is a function, return the result of executing the function
  if (initialValue instanceof Function) return initialValue();
  // finally, if initialValue is not stored in localStorage return it. 
  return initialValue;
}

// Because we want our function to be dynamic we need to pass a key value to it so we can save and then call multiple values in localStorage
// and keep persistent data for each instance of the function. 
export default function useLocalStorage(key, initialValue) {
  // here we are just testing how fast this function executes by wrapping it in a performance timestamp.
  var start = performance.now();
  // here we create our storedValue useState variable. Remember when I said useState could be set to the value of a function?
  const [storedValue, setStoredValue] = useState(() => {
    // here we run the function from above passing in the same info that we called useLocalStorage with
    return getSavedValue(key, initialValue);
  });

  // We need a way of actually updating our local storage with the data we want to save. We can do this easily with a useEffect hook. This updates our current storage with the value every time it is updated. We also need to pass a few dependencies to useEffect. This includes the key for the storage element. Although we won't be updating the key in this particular application this is still good practice to add it here. If we do not pass the key as a dependency, if the key value is updated later our function would search local storage using that new key value which could lead to data loss.
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);
  //creates end timestamp
  var end = performance.now();
  // console.logs the amount of time the function took to execute each time it is run.
  console.log(key + " took " + (end - start) + "ms. to retrieve");
  // returns the values after changing or updating them. 
  return [storedValue, setStoredValue];
}
