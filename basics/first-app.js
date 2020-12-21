//console.log('Hello qqq');


// File system
//const fs = require('fs');
//fs.writeFileSync('a.txt','dfdfdfdfsda');


const person  = {
    name : 'Atishubh',
    age : 45,
    getNameAge () {
        console.log(`Name is ${this.name} age is ${this.age}`)
    }
}
// Spread operator for object
const copiedPerson = {...person};
let hobbies = ['Cooking', 'Cricket', "Movies"];

// Spread operator for array
const copiedHobbies = [...hobbies];

//console.log(copiedPerson);
//console.log(copiedHobbies);

// map function for array
 hobbies = hobbies.map((hobby)=>{
    return(`Hobby is ${hobby}`)
});
//console.log(hobbies);

// for of loop
for(const hobby of hobbies){
    //console.log(hobby);
}

// for in loop
for(const index in hobbies){
    //console.log(hobbies[index]);
}
//person.getNameAge();

// desctructuring object
const getAge = ({age}) => {
console.log('Age is '+ age);
}


getAge(person);