const students = [
    {
        name: "Joao",
        noteOne: 6,
        noteTwo: 7,
    },
    {
        name: "Julia",
        noteOne: 9,
        noteTwo: 8,
    },
    {
        name: "Guilherme",
        noteOne: 3,
        noteTwo: 2,
    },
    {
        name: "Catarina",
        noteOne: 8,
        noteTwo: 6,
    },
];


const media = (nota1, nota2) => {
    return((nota1 + nota2) / 2)
}


const mensagemAlunos = (alunos) =>{
    let resultado = media(alunos.noteOne, alunos.noteTwo)

    if(resultado < 7){
        return(`A média do(a) aluno(a) ${alunos.name} é: ${resultado}\nNão foi dessa vez, ${alunos.name}! Tente Novamente!`)
    }else{
        return(`A média do(a) aluno(a) ${alunos.name} é: ${resultado}\nParabéns, ${alunos.name}! Você foi aprovado(a) no concurso!`)
    }
}


for(let estudante of students){
    let mensagem = mensagemAlunos(estudante)
    alert(mensagem)
}

