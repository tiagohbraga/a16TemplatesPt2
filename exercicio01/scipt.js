const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

const golsJogador1 = array[0]
const golsJogador2 = array[1]
const golsJogador3 = array[2]
const golsJogador4 = array[3]
const golsJogador5 = array[4]

// Crie um laco for que itere pelo array, e em sequência itere pelo array que existe dentro do primeiro array. Você deve imprimir a temporada, e o número de gols, como no exemplo abaixo:

console.log('Jogador 01:')
for(let i in golsJogador1){    
    console.log(`Temporada ${Number(i)+1}: ${golsJogador1[i]}`)       
}

console.log('')

console.log('Jogador 02:')
for(let i in golsJogador2){    
    console.log(`Temporada ${Number(i)+1}: ${golsJogador2[i]}`)       
}

console.log('')

console.log('Jogador 03:')
for(let i in golsJogador3){    
    console.log(`Temporada ${Number(i)+1}: ${golsJogador3[i]}`)       
}

console.log('')

console.log('Jogador 04:')
for(let i in golsJogador4){    
    console.log(`Temporada ${Number(i)+1}: ${golsJogador4[i]}`)       
}

console.log('')

console.log('Jogador 05:')
for(let i in golsJogador5){    
    console.log(`Temporada ${Number(i)+1}: ${golsJogador5[i]}`)       
}