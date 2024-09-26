#  Solution Code

## Problem 2665:

Q. Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

``` Javascript

var createCounter = function(init) {

    let x = init;
    
    const increment = function(){
        return ++x;
    }

    const decrement = function(){
        return --x;
    }

    const reset = function(){
        x = init;
        return x;
    }

    return{
        increment,
        decrement,
        reset
    }
};


// const counter = createCounter(5)
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4

