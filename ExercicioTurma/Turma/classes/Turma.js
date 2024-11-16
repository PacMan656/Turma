class Turma {
    constructor(codigo, nota) {
      this.codigo = codigo;
      this.nota = nota;
    }
  
    aprovado() {
      return this.nota >= 6.0; // Considerando aprovação com nota >= 6.0
    }
  }
  
  module.exports = Turma;
  