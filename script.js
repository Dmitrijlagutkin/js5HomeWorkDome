//--------------first part--------------

let symbolString = ""
let randomSymbol

for (let i = 0; i <= 24; i++) {
	randomSymbol = Math.ceil(Math.random() * (122 - 65)) + 65
	randomSymbol = String.fromCharCode(randomSymbol)
	symbolString += randomSymbol
	if (randomSymbol === "E" || randomSymbol === "w") break
}
console.log(symbolString)
let symbolStringLength = symbolString.length
let randomNumberSymbol = Math.ceil(Math.random() * (symbolStringLength - 1))
console.log(randomNumberSymbol)
let charAtSymbol = symbolString.charAt(randomNumberSymbol - 1)
console.log(charAtSymbol)
symbolStringLength < 5 ? console.log(symbolString.repeat(4)) : console.log(symbolString.substring(4, symbolStringLength))


//--------------Second part--------------

// let myNumber = 1
// let count = 1
// while (count <= 5) {
// 	myNumber *= count
// 	count++
// }
// console.log(myNumber)

//--------------Second part--------------

// let myString = ""

// for (i = 0; i <= 4; i++) {
// 	myString += "#"
// 	console.log(myString)
// }

// let spaceSymbol = " "
// let sharpSymbol = "#"
// let countSpace = 4
// let countSharp = 0
// while (countSpace >= 0) {
// 	countSharp++
// 	spaceSymbol.repeat(countSpace)
// 	console.log(spaceSymbol.repeat(countSpace), sharpSymbol.repeat(countSharp))
// 	countSpace--
// }