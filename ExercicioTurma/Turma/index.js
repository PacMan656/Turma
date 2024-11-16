const Aluno = require('./classes/Aluno');
const Turma = require('./classes/Turma');
const TurmaPresencial = require('./classes/TurmaPresencial');

const aluno = new Aluno('João', 'joao123', 'A123456');
const turma = new Turma('MATH101', 7.5);
const turmaPresencial = new TurmaPresencial('PHYS202', 5.5, 80);

console.log(`Aluno: ${aluno.nome}, RA: ${aluno.RA}`);
console.log(`Turma: ${turma.codigo}, Aprovado: ${turma.aprovado()}`);
console.log(`Turma Presencial: ${turmaPresencial.codigo}, Aprovado: ${turmaPresencial.aprovado()}`);
