
// Practice Problem 1 [map(), find(), filter]

// 1) convert an odd numbers array into even numbers array

const numbers = [1, 3, 5, 7, 9];

const OddNumber = numbers.map(number => number + 1)
console.log(OddNumber)

// 2) Return the array elements which are divided by 10

const allNumbers = [33, 50, 79, 78, 90, 101, 30];

const devided10Nums = allNumbers.filter(num => num % 10 === 0)

console.log(devided10Nums)

// 3) same task like num. 2 problem but do it with array.find()

const filteredDivided10 = allNumbers.find(n => n % 10 === 0)

console.log(filteredDivided10)

// Practice Problem Reduce

// 1) add all the elements of an array and do this with array.redue() method

const myArray = [1, 9, 17, 22];

const reducedArray = myArray.reduce((previousValue, currentValue) => {
    return previousValue + currentValue
}, 0)

console.log('The summation of array elements is:', reducedArray)

// Challanging (sum the elements from array of object);

const people = [
    { name: 'Moshiur', age: 25 },
    { name: 'sayma', age: 18 },
    { name: 'Osman', age: 26 },
]

const reducedPeople = people.reduce((previousValue, currentValue) => {

}, 0)

// Practice Problem : Access Object values

const student = {
    name: 'Nahid',
    age: 20
}

const age = student.age
console.log('Student age is: ', age)

const data = {
    location: [
        {
            latitude: '34.5, 37.8',
            longitude: '98.77, 58.7',
            city: 'Dhaka',
            country: 'Bangladesh'
        }
    ]
};

const Newcity = data.location[0].city

console.log('The city name is:', Newcity)

const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

const { email, address, lat, company } = user;

console.log(email,address, address.city, address.geo?.lat, company);

