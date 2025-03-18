class Animal{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }
    crescer(){
        this.idade++;
        console.log(`${this.nome} cresceu! Agora tem ${this.idade} anos!`)
    }
}
class Gato extends Animal{
    constructor(nome, idade, vidas){
        super(nome, idade);
        this.vidas = vidas;
    }
    crescer(){
        super.crescer();
        console.log(`E ${this.nome} ainda tem ${this.vidas} vidas`)
    }
}
let meuGato = new Gato("Mingau", 2, 7);
console.log(meuGato.idade);
meuGato.crescer();