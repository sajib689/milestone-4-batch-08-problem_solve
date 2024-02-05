// inch to feet converted
function inchToFeet (inch) {
    const feet = inch / 12
    return feet
}
function inchToFeet2 (inch){
    const feet = parseInt(inch / 12)
    const inches = inch % 12
    const result = feet + 'ft' + inches +'in'
    return result
}
// console.log(inchToFeet2(60.87))

// mile to kilometers

function mileToKilometers(miles){
    const km = miles * 1.6
    return km
}
// console.log(mileToKilometers(60.87))
// km to miles converted

function kmToMiles(km){
    const miles = km * 0.621371
    return miles
}
// console.log(kmToMiles(6))
// leap year get

function leapYear(year) {
    if(year % 100 !== 0 && year % 4 === 0){
        return `<p>${year} year is leap year</p>`
    } else {
        return `<p>${year} This year is not leap year</p>`
    }
}
// console.log(leapYear(2043))

// get the average odd numbers 


function getAverageNumber(numbers) {
    const odds = []
    for ( const number of numbers) {
        if(number % 2 === 1) {
            odds.push(number)
        }
    }
    // all odds numbers
    let sum = 0
    for ( const number of odds ) {
        sum = sum + number
    }
    const count = odds.length
    const avg = sum / count
    return avg
}

let numbers = [ 44, 50, 47, 20, 30, 100, 13, 41, 144, 145, 400, 93]
const avg = getAverageNumber(numbers)
// console.log(avg);
// get even numbers averaging

function getEvenNumber(num) {
    for( const number of numbers ) {
        if( number % 2 === 0 ) {
            console.log( number)
        }
    }
}
let num = [ 44, 50, 47, 20, 30, 100, 13, 41, 144, 145, 400, 93]
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
    //  console.log(i);
  }, 100);
}  
// get the duplicate elements


function noDuplicate (array) {
    const unique = []
    for (const biryanikhorus of biryanikhor) {
        if(unique.includes(biryanikhorus) === false) {
            unique.push(biryanikhorus)
        }
        return unique
    }
}
const biryanikhor =[ 'abul', 'babul', 'cabul', 'abul', 'babul', 'cabul']

// console.log(noDuplicate(biryanikhor))
const today = new Date()
const date = new Date('2062-10-09')
// console.log(date.getFullYear())
let a = 5
let b = 7
const temp= a
a = b
b = temp
console.log(a, b)