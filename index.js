const { firstItem, allButLast, onlyLast, allButFirst, nthElement, removeElement, removeDuplicates, add, randomNum, strUpperCase, allCaps, checkLastChar } = require("./function.js")
const { names, numbers } = require("./data.js")

console.log(names, numbers)



console.log(firstItem(names))
console.log(firstItem(numbers))

console.log(allButLast(names))
console.log(allButLast(numbers))

console.log(onlyLast(names))
console.log(onlyLast(numbers))

console.log(allButFirst(names))
console.log(allButFirst(numbers))

console.log(nthElement(numbers, 4))
console.log(nthElement(names, 55))

console.log(removeElement(names, "Eric"))
console.log(removeElement(numbers, 4))

console.log(removeDuplicates(names))
console.log(removeDuplicates(numbers))

console.log(add(numbers))

console.log(randomNum(2, 5))

console.log(strUpperCase("großgeschrieben"))

console.log(allCaps("alles erstmal klein, jetzt aber groß"))

console.log(checkLastChar("test", "t"))
console.log(checkLastChar("Test", "q"))

