// Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a tabuada do número, de 1 a 10.

// Utilize o for...in para resolver
let calculadora = ['','','','','','','','','','','']
let num = Number(prompt('Digite um número'))

    for(let i in calculadora){
        
        let mult = (`${num} x ${i} = ${Number(i)*Number(num)}`)
        console.log(mult)
    }
