const estudantes = [
    { nome: 'Vitória', nota: 5.26 },
    { nome: 'Ana', nota: 7.2 },
    { nome: 'João', nota: 3.16 },
    { nome: 'Rafael', nota: 1.75 },
    { nome: 'Patrícia', nota: 5.93 },
    { nome: 'Eduardo', nota: 5.98 },
    { nome: 'Gabriela', nota: 3.87 },
    { nome: 'Otávio', nota: 4.57 },
    { nome: 'Thiago', nota: 1.63 },
    { nome: 'Fernanda', nota: 3.01 },
    { nome: 'Lucas', nota: 1.57 },
    { nome: 'Sofia', nota: 6.6 },
    { nome: 'Mariana', nota: 2.11 },
    { nome: 'Daniel', nota: 9.73 },
    { nome: 'Natália', nota: 1.78 },
    { nome: 'Isabela', nota: 5.17 },
    { nome: 'Kauê', nota: 3.47 },
    { nome: 'Henrique', nota: 0.45 },
    { nome: 'Carlos', nota: 0.85 },
    { nome: 'Beatriz', nota: 6.86 },
];

const estudantesComMediaMaiorOuIgualA6 = estudantes.filter(estudante => estudante.nota >= 6);

console.log(estudantesComMediaMaiorOuIgualA6);
