
// function  sayHelloTo (name) {
//     const message = 'Hello ' + name
//     return function () {
//         console.log(message)
//     }
// }
//
// const helloNat = sayHelloTo('Nat')
// console.log(helloNat)
// helloNat()

function CreateFrameworkManager() {
    const frame = ['angular','react']
    return {
        print:function () {
            console.log(frame.join(' '))
        },
        add:function (framework) {
            frame.push(framework)
        }
    }
}
const manager = CreateFrameworkManager()
manager.print()
console.log(manager.add('vue'))
manager.print()

const fib = [1,2,3,5,8,13]
for (var i =0 ; i < fib.length; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(`fib [${j}] = ${fib[j]}`)
        },1500)
    })(i)

}