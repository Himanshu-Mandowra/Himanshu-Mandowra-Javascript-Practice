#  Solution Code

## Project 1 bg Color changer

``` Javascript
console.log("Himanshu")

const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
    console.log(button);
    addEventListener('click', function(e){
        console.log(e)
        console.log(e.target)
        body.style.backgroundColor = e.target.id;
        buttons.forEach(btn => btn.style.border = "2px solid black");
    })
})