/*let resName = "BiteBox";
let userName = prompt(`wellcome to ${resName}\n Please enter your name:`);
alert(`Hello ${userName}, welcome to ${resName}!`);

let menu = confirm(`Would you like to see our menu, ${userName}?`);
console.log(menu);
if (menu) {
    alert('great! here is our menu:');
}else{
    alert('no worries, you can check it out later!');
}

let choice = prompt(`Please choose an item from our menu:\n1. Burger\n2. Pizza\n3. Salad\n4. Soda\n5. Dessert`);
switch (choice) {
    case '1':alert('You have chosen Burger. Enjoy your meal!'); break;
    case '2':alert('You have chosen Pizza. Enjoy your meal!'); break;
    case '3':alert('You have chosen Salad. Enjoy your meal!'); break;
    case '4':alert('You have chosen Soda. Enjoy your meal!'); break;
    case '5':alert('You have chosen Dessert. Enjoy your meal!'); break;
    default:alert('Invalid choice. Please try again.'); break;
}

for ( i = 1; i <= 5; i++) {
    let userInput = prompt(`enter a food item:`+i);
  let qrut=  prompt(`you have entered ${userInput}`);
  console.log('{userInput}:{qrut}');
}

for (let i = 6; i >=1; i--) {
   console.log(i);}

let  i= 0;
let n = 10;
while (i <= n) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    }if (i % 2 !== 0) {
        console.log(i + " is odd");
    }else {
    console.log(i);
    i++;
}
}

console.log(math.pow(2, 3));*/

const { act } = require("react");

let marks=[90, 80, 70, 60, 50];
console.log(marks[3]);
marks [4]=75;

for (i of marks) {
    console.log(i);
}

marks [5]=100;
console.log(marks[5]);
marks.push(85);
console.log(marks);
marks.pop(78);
console.log(marks);
marks.map(Math.sqrt);
console.log(marks);

let name=["John", "Jane", "Jim", "Jill"];
name.splice(2, 1, "Jack");
name.sort();
name.reverse();
console.log(name);
name.shift();
name.unshift("Jasmine");
console.log(name);
name.indexOf("Jane",3);
console.log(name);
console.log(name);

let s1 =[23,34,45,67];
let s2 = s1.map(value => value * 2);
console.log(s2);

const s3='abcdef';
const s5=Array.from(s3);
console.log(s5);