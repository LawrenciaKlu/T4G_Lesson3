// let num1 = 3;
// let num2 = 5;
// let result = num1 + num2;
// console.log(result);
// alert(result);

// let num3 = 10;
// let num4 = 20;
// let result2 = num3 + num4;
// console.log(result2);
// alert(result2); //purpose of the function is to add two numbers...reusable block of codes

// function addTwoNumbers(num1, num2) {
//     console.log(addition);
// }

// addTwoNumbers(3, 5);

function sayHello() {
    let user = prompt("What's your name?");
    alert(`Hello ${user}`);
}
sayHello();

function cookRice(salt,rice,water){
    alert(`You have ${salt} salt, ${rice} rice and ${water} water`)
}
cookRice("half, a cup", "a cup", "a cup");

// function order(number,size){
//     prompt("How many pizzas do you want?");
//     prompt("What size do you want?");
// }
// order();
//.inner html..
function checkage(){
    let age = prompt("How old are you?");
    if(age >= 18){
        alert("You can vote");
    }
    else{
        alert("You can not vote");
    } 

}
function checkage(){
    let age = prompt ("How old are you?");
    if (age && age <6){
        alert("You are a baby");
    }   else if (age && age <18)
        alert("You are a teenager");
        
}    

