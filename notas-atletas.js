let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas:  [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

function obtemNotasAtleta() {
    for (let i = 0; i < atletas.length; i++) {
        // O código que vai aqui será executado
        // uma vez para cada item da matriz
    
        //declaração de variáveis
        let soma = 0
        let media = 0
        let notas = atletas[i].notas.sort()
        let notasComputadas = notas.slice(1,4)
        
        notasComputadas.forEach(function(nota) {
            soma = soma + nota
        })
        media = soma / notasComputadas.length
        
        console.log("Atleta: " + atletas[i].nome)
        console.log("Notas Obtidas: " + notas)
        console.log("Média Válida: " + media)
        console.log("")
    }
}

obtemNotasAtleta()


// Atleta: Cesar Abascal
// Notas Obtidas: 10,10,7.88,8.42,9.34
// Média Válida: 8.766666666666666

// Atleta: Fernando Puntel
// Notas Obtidas: 10,10,7,8,9.33
// Média Válida: 8.333333333333334

// Atleta: Daiane Jelinsky
// Notas Obtidas: 10,7,8,9.5,9.5
// Média Válida: 8.166666666666666

// Atleta: Bruno Castro
// Notas Obtidas: 10,10,10,9,9.5
// Média Válida: 9.666666666666666
