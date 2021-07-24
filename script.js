//Task 1 
//Calculate total price of each item and all items;

var itemsArray = [
    {name:"juice",price:"50", quantity:"3"},
    {name:"cookie",price:"30", quantity:"9"},
    {name:"shirt",price:"880", quantity:"1"},
    {name:"pen",price:"100", quantity:"2"}
];
var item1 = itemsArray[0].price*itemsArray[0].quantity;
var item2 = itemsArray[1].price*itemsArray[1].quantity;
var item3 = itemsArray[2].price*itemsArray[2].quantity;
var item4 = itemsArray[3].price*itemsArray[3].quantity;

console.log("Total Price of Juice is "+ item1);
console.log("Total Price of Cookie is "+ item2);
console.log("Total Price of Shirt is "+ item3);
console.log("Total Price of Pen is "+ item4);
console.log("And");
console.log("The total price of all items is "+ (item1+item2+item3+item4));

// Task 2
// Create an object with properties name, email, password, age, gender, city, country.
// Check if age and country properties exist in object or not.
// Also check firstName and lastName properties in object.
var myInfo = {
    firstName: 'Usman',
    lastName: 'Ali',
    email: 'usmanaliwallara@gmail.com',
    password: "U$man",
    age: '22 yrs',
    gender: 'Male',
    city: 'Karachi',
    country: 'Pakistan',
};

console.log("Country and Age is "+myInfo.country, myInfo.age);
console.log("Fisrt and Last Name "+myInfo.firstName, myInfo.lastName);

//Task 3
// Create a constructor function with some properties. Now
// create multiple records using the constructor.
function Information(sName, sAge, sJob)
{
    this.name = sName;
    this.age = sAge;
    this.job = sJob;
}

var student1 = new Information('Usman Ali', 22, 'Developer');
var student2 = new Information('Zeeshan Ali', 20, 'Designer');
var student3 = new Information('Rizwan Ali', 18, 'Technician');

console.log(student1.name, student1.age, student1.job);
console.log(student2.name, student2.age, student2.job);
console.log(student3.name, student3.age, student3.job);

