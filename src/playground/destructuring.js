//
// Object destructuring
//

// const person = {
//   name: 'Laércio',
//   age: 32,
//   location: {
//     city: 'Boa Vista',
//     temp: 22
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

//
// Array destructuring
//

// const address = ['87 Bom Jesus Street', 'Boa Vista', 'Paraíba', '58123-000'];
// const [, city, state = 'Pernambuco'] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}.`);