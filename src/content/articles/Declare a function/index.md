---
title: 'Declare a function'
author: 'Dennis Merkulov'
slug: 'js-functions'
description: Well explained declaration if functions in JavaScript
category: Programming
keywords: javascript, tutorial, entry-lvl
image: ./images/js.png
---

# How to declare a function in JavaScript

## Function declaration

We can involve function before it's delared, function available in memory because of hoisting

```js
a() // function a output
function a() {
  console.log('function a output')
}
```

## Function expression

But in case of Function expression we will try to invoke empty variable `b`

```js
b() // error undefined is not a function
var b = function() {
  console.log('function b output')
}
```

## Immediately Invoked Functions Expressions (IIFEs)

We don't need to call those functions, they will invoke immediately by themselfs

```js
var greet = (function(name) {
  console.log('Hey ' + name) // Hey Guest
})('Guest')

// IIFE
;(function() {
  console.log('Hey')
})()

// IIFE override global variable
var greeting = 'Hello'
;(function(global, name) {
  var greeting = 'Hey'
  global.greeting = 'Hey'
  console.log(greeting + ' ' + name) // Hey Guest
})(window, 'Guest')

console.log(greeting) // Hey
```
