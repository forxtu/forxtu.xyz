---
title: 'Fat arrow function'
author: 'Dennis Merkulov'
slug: 'fat-arrow-function'
description:
  The main point in fat arrow function apart of shorter syntax is keyword 'this'. Fat arrow function refers to the place where it is written and regular `function` refers to the place where it is called
category: Programming
keywords: javascript, documentation, es6, middle-lvl
image: ./images/fat-arrow-function.png
---

# Fat arrow function `=>`

## First of all

Fat arrow function has shorter syntax

```js
// regular function
let someFunc = function(x) {
  return x * x
}
// arrow function
// if we are using 1 parameter we can omit round brackets
// in case of multiple parameters we should use them (x, y) => ...
let someFunc = x => {
  return x * x
}
// But we can do it even shorter
/*
* Take a closer look that we used round brackets instead of curly brackets
* that means that we are returning something, and we could return multiline things
*/
let someFunc = () => (
  ...
  console.log('something');
)
// And if we are returning only 1 operation we can write our function in 1 line
let someFunc = x => x * x
```

You will use arrow function a lot in different **array helpers** methods like `map` or `reduce`. Thats extremely popular and useful.

And the other very important thing about **arrow function** apart shorter syntax is:

### Fat **arrow function** refers to the place where it is written and regular **function** refers to the place where it is called

In case we call regular function like this `someFunc();` - `this` always will refers to the `window`.

## The main point of `this` in arrow functions:

**Arrow function does not have** a `this` on their own like regular **functions**. Only regular function and global scope has `this` of their own.

#### Which would mean that whenever `this` would be referred in **arrow funciton**, it will start looking **up the scope** to find the value of `this`.

In this case, during look up it found, that the object is not having a `this` of it's own, hence, it went upto global scope, and binded the value of `this` with global scope, where it wont find our `name` or anything.

```javascript
const profile = {
  name: 'Peter',
  getName: () => {
    console.log(this) // looks up and doesn't see 'this' inside object so refers to the 'window'
    return console.log(this.name)
  }
}

var name = 'Alex' // if we won't declare value here getName() will return undefined and error
profile.getName() // will return 'Alex' because 'this' is pointing to the window object
```

### We have to wrap **fat arrow** in function to get `this` of the needed object, because `function` has her own `this`

```javascript
const profile = {
  name: 'Peter',
  getName: function() {
    console.log(this) // object
    return (() => {
      console.log(this) // object
      console.log(this.name) // Peter
    })()
  }
}

var name = 'Alex' // won't be displayed because it's 'global window name'
profile.getName() // Peter
```
