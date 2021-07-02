// Basic Looping In JavaScript Blog //


// For Loop //

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function forLoop1(arr){
    let nums = ''
    for (let i = 0; i < arr.length; i++) {
        nums = nums + arr[i] + '\n' 
    }
    return nums
}
console.log(forLoop1(numbers))

const garage = [
    '1967 Ford Mustang Fastback', 
    '1991 Lancia Delta Integrale', 
    '1962 Chevy 2 Nova', 
    '1987 Audi Quattro S1'
]

function forLoop2(arr){
    let collection = ''
    for (let i = 0; i < arr.length; i++) {
        collection = collection + arr[i] + '\n' 
    }
    return collection  
}
console.log(forLoop2(garage))

// For In Loop //

function forInLoop1(arr){
    let nums = ''
    for (let i in arr) {
        nums = nums + arr[i] + '\n' 
    }
    return nums
}
console.log(forInLoop1(numbers))

function forInLoop2(arr){
    let collection = ''
    for (let i in arr) {
        collection = collection + arr[i] + '\n' 
    }
    return collection  
}
console.log(forInLoop2(garage))

// For Of Loop //

function forOfLoop1(arr){
    let nums = ''
    for (let i of arr) {
        nums = nums + i + '\n' 
    }
    return nums
}
console.log(forOfLoop1(numbers))

function forOfLoop2(arr){
    let collection = ''
    for (let i of arr) {
        collection = collection + i + '\n' 
    }
    return collection  
}
console.log(forOfLoop2(garage))

// While Loop //

function whileLoop1(arr){
    let nums = ''
    let i = 0
    while (i < arr.length) {
        nums = nums + arr[i] + '\n' 
        i++
    }
    return nums 
}
console.log(whileLoop1(numbers))


function whileLoop2(arr){
    let collection = ''
    let i = 0
    while (i < arr.length) {
        collection = collection + arr[i] + '\n'
        i++ 
    }
    return collection  
}
console.log(whileLoop2(garage))

// Do While Loop //

function doWhileLoop1(arr){
    let nums = ''
    let i = 0
    do {
        nums = nums + arr[i] + '\n' 
        i++
    } while (i < arr.length)
    return nums
}
console.log(doWhileLoop1(numbers))

function doWhileLoop2(arr){
    let collection = ''
    let i = 0
    do {
        collection = collection + arr[i] + '\n' 
        i++
    } while (i < arr.length)
    return collection
}
console.log(doWhileLoop2(garage))

// Break from a Loop 

function breakLoop1(arr){
    let num = 7
    let i = 0
    let answer = 'Not Found'
    while (i < arr.length) {
        if (num === arr[i]) {
            answer = 'Found'
            break  
        }  
        i++
    }
    return answer 
}
console.log(breakLoop1(numbers))

function breakLoop2(arr){
    let sundayDriver = '1967 Ford Mustang Fastback'
    let i = 0
    let answer = 'Not Found'
    while (i < arr.length) {
        if (sundayDriver === arr[i]) {
            answer = 'Found'
            break
        } 
        i++ 
    }
    return answer  
}
console.log(breakLoop2(garage))