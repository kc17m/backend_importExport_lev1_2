//const { names, numbers } = require("./data")

function firstItem(arr) {
    console.log("will show first el of arr")
    return arr[0]
}

function allButLast(arr) {
    console.log("will show all but last element of arr")
    return arr.slice(0, arr.length - 1)
}

function onlyLast(arr) {
    console.log("will how only last element of arr")
    return arr[arr.length - 1]
}

function allButFirst(arr) {
    console.log("will remove all but first Element from Arr")
    return arr.slice(1)
}

function nthElement(arr, n) {
    if ((n < 0) || (n > arr.length - 1)) {
        console.log("nth Element is out of Scope")
        return arr[arr.length - 1]
    }
    else {
        console.log("this is the nth Element of the Array")
        return arr[n]
    }
}

function removeElement(arr, el) {
    let index = arr.indexOf(el)
    //console.log(index)
    arr.splice(index, 1)
    console.log("remove array sth from array")
    return (arr)

}

//removeElement(names, "Simon")

function removeDuplicates(arr) {
    let uniqueArr = [];
    console.log("will only show unique items")
    arr.forEach((el) => {
        if (!uniqueArr.includes(el)) { uniqueArr.push(el) }
    })
    return uniqueArr
}

//console.log(removeDuplicates(numbers))

function add(arr) {
    console.log("will add all items of arr");
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

//// ohne Array
//random num between num1 and num2

function randomNum(num1, num2) {
    console.log("will generate a random number between num1 and num2");
    return Math.floor(Math.random() * (num2 - num1 + 1) + num1)
}

//console.log(randomNum(2, 6))

//string: first character in upper case

function strUpperCase(str) {
    console.log("will turn first char to upper case")
    let res = "";
    res = str[0].toUpperCase() + str.slice(1);
    return res;
}

console.log(strUpperCase("llll"))


//string to all caps

function allCaps(str) {
    console.log("will turn string to all caps");
    return str.toUpperCase()
}

//console.log(allCaps("lkjlasjdflasdjf"))


// check to match if last char matches param 2

function checkLastChar(str, param) {
    console.log("checks, if last char of str matches param");
    let res;
    (str[str.length - 1] === param ? res = true : res = false);
    return res;
}

//console.log(checkLastChar("string", "g"))










module.exports = { firstItem, allButLast, onlyLast, allButFirst, nthElement, removeElement, removeDuplicates, add, randomNum, strUpperCase, allCaps, checkLastChar }