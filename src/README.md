# Module Project: Composing Stateful Logic - Dark Mode

This project allows you to practice the concepts and techniques learned in this module and apply them in a concrete project. This module explored Form management in React. You learned what stateful logic is, how to build custom hooks, how to compose multiple hooks together, and how to use mocks and spies in testing. In your project you will demonstrate proficiency of these subjects and principles by creating an application using each of these.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this project.**

### Commits

Commit your code regularly and meaningfully. This helps both you and your team lead in case you ever need to return to old code for any number of reasons.

### Description

In this project you'll take this crypto currency tracker app and build two custom hooks that, when composed together, will allow users to set and persist a dark mode preference.

## Project Set Up

- [ ] Create a forked copy of this project.
- [ ] Add your team lead as collaborator on Github.
- [ ] Clone your OWN version of the repository in your terminal
- [ ] CD into the project base directory `cd dark-mode`
- [ ] Download project dependencies by running one of these two commands `yarn` or `npm install`
- [ ] Using the same command tool (yarn or npm) start up the app using `yarn start` or `npm start`
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repository). **Please don't merge your own pull request**
- [ ] Add your team lead as a reviewer on the pull-request
- [ ] Your team lead will count the project as complete by merging the branch back into master.
- [ ] Do your magic!

## Minimum Viable Product

- [ ] Build a custom hook that let's you save data to localStorage
- [ ] Build a second custom hook that sets the `dark-mode` class on the body element
- [ ] Compose your two new hooks together to be able to set and persist your user's dark mode preference in your app
<!--
- [ ] Write tests that use mocks and spies to handle dependencies in your components
-->

## STEP 1 - useLocalStorage

Open your app and take a look around. The crypto currency data is being fetched and displayed for you. In `styles.scss`, at the very bottom, you'll notice there are some styles for a class called `dark-mode`. Soon, we'll write a custom hook that sets this class on the body tag. That hook is going to compose a `useLocalStorage` inside it to accomplish that, so let's write the localStorage one first.

This is going to be a pretty cool hook. It will be used pretty much the same way as `useState`, but with a key and value passed into it - ie `const [name, setName] = useLocalStorage('name', 'Dustin')`. You can use `setName` to update the value of `name` on localStorage! Pretty cool, huh? Let's get to it!

- Create a new directory called `hooks`, and a new file in it called `useLocalStorage`.
- Build a function called `useLocalStorage`. Now, to set something to localStorage, we need a key (must be a string) and a value (can be anything). To retrieve something from localStorage, we need the key. To update something in localStorage, you use the same method as adding something new, and it will just replace the old key/value pair in localStorage. Knowing this, let's add `key` and `initialValue` as parameters to the hook.
- We're going to set up some state here. Set up a state property called storedValue.
  - This state property is going to take a function as it's initial value. When we do this, whatever that callback function returns is what gets set as the intialValue for the state property.
  - In the callback function, we'll check to see if the item we passed in already exists in localStorage, and return that value, otherwise we'll return whatever initialValue was passed in.
  - Quick note, if you pass in arrays or objects to localStorage, you will need to parse it into JSON. Then when you retrieve it, like we do below, you'll need to parse it back into regular JavaScript

```js
// To retrieve an item from localStorage, call localStorage.getItem('itemName')
// If that item doesn't exist, it will return undefined
const [storedValue, setStoredValue] = useState(() => {
  // Get from local storage by key
  const item = window.localStorage.getItem(key);
  // Parse and return stored json or, if undefined, return initialValue
  return item ? JSON.parse(item) : initialValue;
});
```

- Now, let's return `storedValue` from this hook in an array:

```js
import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  return [storedValue];
};
```

- Remember we're trying to use this hook like this: `const [name, setName] = useLocalStorage('name', 'Dustin')`. So far we have made the value part of the hook, but not the setter. Let's go ahead and create a setter function, and return that in the array as well.
  - inside the hook, write a function called `setValue` that takes a `value` parameter
  - In `setValue`, set the `value` to localStorage using the `key` that was passed into the hook itself
  - Also, update the state of `storedValue` with `value` as well
  - Add `setValue` to the array that is being returned out of this hook
  - `setValue` should look something like this:

```js
const setValue = value => {
  // Save state
  setStoredValue(value);
  // Save to local storage
  window.localStorage.setItem(key, JSON.stringify(value));
};
```

We're going to use this inside our dark mode hook, but this can be used anywhere for any kind of localStorage needs you have in your apps. Custom hooks are so awesome!!

## STEP 2 - useDarkMode

- Inside the `hooks` directory, add a new file called `useDarkMode`.
- Build a function called `useDarkMode`.
- Import `useLocalStorage`
- Call `useLocalStorage` and pass in the key you want to use to store whether or not dark mode is enabled. Remember, this hook returns an array with a value and a setter in an array, exactly like the state hook, so make sure to capture those values in a `const` - `const [someValue, setSomeValue] = useLocalStorage('your key here')`
- Now to add the class to the body. If we need to manipulate the DOM directly, how do we do that? Any direct DOM manipulation is considered a side effect, right? So let's use the effect hook.
  -Import and set up your effect hook.
  - Inside it, check to see if the value from `useLocalStorage` is true or false.
  - If it's true, add the class `dark-mode` to the `body` element.
  - If it's false, remove the class from the `body` element. (If you don't quite remember how to do this from ages and ages ago, Google will be your friend here 😉)
  - We don't want this effect to run every time anything in the component changes, right? Think about what piece of data this hook depends on, and should be synced with, and add that in its dependency array.
- Finally, we need to return something out of here so we can use this in our app. What do you think we'll need? We'll need to know if dark mode is enabled, right? And we'll need a setter function to toggle dark mode. Let's just forward the value and the setter that were returned out of the `useLocalStorage` call. Return those two values in an array as well.

## STEP 3 - Using the hook in a component

Now that we have composed our different pieces of stateful logic, let's use it in our component!

- import the dark mode hook into the `NavBar` component
- Looking at this component, we see that we are controlling the toggle with some state. The state hook here returns a `darkMode` value, and a `setDarkMode` function. Isn't that exactly what our `useDarkMode` hook returns as well? Replace the state hook with our hook, click the toggle, and watch the magic happen!!!

(If it wasn't magical, you have a bug somewhere 😫 go back through the steps slowly, one at a time, to see if you missed any of the steps)

## Stretch Problems

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- Add routing into this app and build out some other pages

- Go to the [Coin Gecko API](https://www.coingecko.com/) where we got this data from, and add more features to your app. Maybe you want to make a dropdown list of coins, and only look at one coin at a time. You could make an API call to that API for a specific coin and get more data on it. You could get more specific coin data for the last 24 hrs. There's a lot you can do with this API. Explore and have fun!

- Look into the recharts library and build a new chart. Or change the appearence of the charts we built out here. Maybe when you toggle to dark mode, the line on the chart could change colors! There's a lot you can do with this library. Explore and have fun!
