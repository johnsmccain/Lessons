// function myExit() {
//     console.log("Before")
//     return "Boma"
//     console.log("After")
// }

// console.log(myExit())

// for (let i = 1; i <= 10; i++){
//     console.log(i)
    
//     if (i == 5){
//         console.log("I found the number! ", i)
//         return
//     }
// }

const myLargeArr = [];
for (let i = 1; i <= 100; i++){
    myLargeArr.push(i)
}

// console.log(myLargeArr[23])
// Linear Search
// function findANumber(arr, target){
//     for(let num = 0; num < 100; num++){
//         console.log("arr element: ", arr[num] + " target: ", target)
//         console.log(arr[num] == target)
//     }
// }

// // valid
// findANumber(myLargeArr, 50)



// const arr = ["Banana", "Orange", "Apple"]
// console.log(arr.length)

// arr.push("Lemon")
// console.log(arr.length)

// let arr = []
// for(let a = 1; a <= 100; a++){
//     arr.push(a)
// }
// console.log(arr)
// console.log(arr.length)

// function findANumber2(arr, target){
//     for(let num = 0; num < 100; num++){
//         console.log("arr element: ", arr[num] + " target: ", target)
        
//     }
// }

// valid
// findANumber2(myLargeArr, 50)
// age 0-3 infant
// age 3-10 child
// age 10-18 teenage
// age 18-30 adult
let age = 60

if (age < 3){
    console.log("You're an infant");
} else if (age < 10){
    console.log("You're a child")
} else if (age < 18){
    console.log("You're a teenager")
} else if (age < 30){
    console.log("You're an adult")
} else {
    console.log("You're too old for this program")
}