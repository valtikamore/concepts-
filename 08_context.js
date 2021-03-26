
//
// const persone = {
//     surname:'Stark',
//     knows:function (what,name) {
//         console.log(`You ${what} know ${name} ${this.surname}`)
//     }
// }
// const John = {
//     surname:'Snow'
// }
// persone.knows('All','Bran')
// persone.knows.call(John,'nothing','John')
// persone.knows.apply(John,['nothing','John'])
// persone.knows.call(John,...['nothing','John'])
// const bound = persone.knows.bind(John,'nothing','John')
// bound()
//
//
// function Persone(name,age){
//     this.name = name
//     this.age = age
//
//     console.log(this)
// }
//
// const nata = new Persone('Natasha',20)
//
//
// function logThis () {
//     console.log(this)
// }
// const obj = {num:42}
// logThis.apply(obj)
// logThis.call(obj)
// logThis.bind(obj)()
//
// // ==== implied
// const animal = {
//     legs :4,
//     logThis : function () {
//         console.log(this)
//     }
// }
// animal.logThis()
//

function Cat(color) {
    this.color = color
    console.log('This ',this);
    (()=> console.log('Yhis arrow ',this))()
}
new Cat('blue')
