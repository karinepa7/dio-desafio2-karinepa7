function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas
    let nivel

    if (vitorias < 10) {
        nivel = 'Ferro'
    } else if (20 >= vitorias <= 11) {
        nivel = 'Bronze'        
    } else if (21 >= vitorias <= 50) {
        nivel = 'Prata'
    } else if (51 >= vitorias <=80) {
        nivel = 'Ouro'
    } else if (91 >= vitorias <= 100) {
        nivel = 'Diamante'
    } else if (100 >= vitorias <= 91) {
        nivel = 'Lendário'
    } else {
        nivel = 'Imortal'
    }
const mensagem = `O herói tem um saldo de ${saldoVitorias} está no nível de ${nivel}`
return mensagem
}

/*
const vitorias = 75
const derrotas = 25
const resultado = calcularNivel(vitorias,derrotas)
console.log(resultado);
*/