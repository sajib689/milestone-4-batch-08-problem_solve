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
    if(year % 4 === 0){
        return `<p>${year} year is leap year</p>`
    } else {
        return `<p>${year} This year is not leap year</p>`
    }
}
// console.log(leapYear(2043))
