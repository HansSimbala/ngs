class Question {
    constructor(titulo, numMax) {
        this.titulo = titulo;
        this.answer = [];
        this.numMax = numMax;
    }
    AgregarTitulo(newTitulo) {
        this.titulo = newTitulo;
    }
    AgregarAnswer(answer) {
        this.answer.push(answer);
    }
    ImprimirQuestion() {
        console.log(this.titulo);
        console.log(this.answer);
        console.log(this.numMax);
    }
}
class SingleChoice extends Question {
    constructor() {
        super('SingleChoice', 10);
    }
}
class MultipleChoice extends Question {
    constructor() {
        super('MultipleChoice', 12);
    }
}
const s = new SingleChoice();
const q = new Question('adsad', 5);
//q.ImprimirQuestion();
s.AgregarTitulo('P1');
s.AgregarAnswer('gato');
s.ImprimirQuestion();