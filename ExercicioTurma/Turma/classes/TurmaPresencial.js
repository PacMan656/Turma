const Turma = require('./Turma');

class TurmaPresencial extends Turma {
  constructor(codigo, nota, frequencia) {
    super(codigo, nota);
    this.frequencia = frequencia;
  }

  aprovado() {
    return super.aprovado() && this.frequencia >= 75; // Considerando aprovação com frequência >= 75%
  }
}

module.exports = TurmaPresencial;
