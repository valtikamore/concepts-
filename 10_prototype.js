// __proto__
//Object.getPrototypeOf()

// function  Cat (name,color) {
//     this.name = name
//     this.color = color
// }
// Cat.prototype.voice = function () {
//     console.log(`Cat ${this.name} says may`)
// }
//
// const cat = new Cat('cat','red')
// // cat.voice()
// console.log(cat)
// console.log(cat.constructor)

// == =

function  Persone () {}
Persone.prototype.legs = 2
Persone.prototype.skin = 'black'

const persone = new Persone()
persone.name = 'Valentine'
console.log('skin' in persone)
console.log(persone.legs)
console.log(persone.name)
console.log(persone.skin)

console.log(persone.toString())
console.log(persone.hasOwnProperty('name'))
console.log(persone.hasOwnProperty('skin'))

//=======
// Object.create()

const proto = {year:2021}
const myYear = Object.create(proto)
console.log(myYear.year)
console.log(myYear.__proto__ === proto)
proto.year = 2020
console.log(myYear.year)