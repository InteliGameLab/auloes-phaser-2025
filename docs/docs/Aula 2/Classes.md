---
title: "Revisão 1: Classes"
slug: classes
sidebar_position: 1
---

# Revisão 1

&emsp;Bom dia pessoas, Periquito aqui pra ajudar na sua prova de Phaser! Nessa primeira página vamos lidar com classes e seus constituíntes. Caso já esteja confiante com o assunto, tente o exercício 1 nessa pasta

## Classes

&emsp;Tendo como padrão o POO, uma classe é o equivalente a uma definição de um objeto. Por exemplo, imaginamos a classe gato

```js
class Gato{

}
```

&emsp;Hum, isso parece meio vazio, então vamos começar pelos atributos desse gato.

## Constructor

&emsp;O constructor não é nada mais do que a função chamada ao criar um objeto. Nele, você normalmente declara os atributos do seu objeto. Voltando ao exemplo do gatinho:

```js
class Gato{
    constructor(){
        //Início do objeto aqui!
    }
}
```

&emsp;Vamos declarar alguns atributos para essa classe. Para isso, podemos inserir que atributos passaremos na criação do objeto em (). Imagine que queremos criar o gato com atributos nome, idade e número de patas. Vamos imaginar que, nesse caso, um gato só possa ter 4 patas, e por isso não precisamos passar esse valor. Podemos fazer assim então:

```js
class Gato{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.patas = 4;
    }
}
```

&emsp;Se você rodar esse código, verá que... Bem, nada acontece. Isso acontece porque você está criando a IDEIA de um gato, não o gato em sí. Vamos instanciar o gato e tentar ver alguma característica dele, como o nome. Para isso, nós podemos criar um novo gato em uma variável dessa forma:

```js
class Gato{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.patas = 4;
    }
}
let meuGato = new Gato("Nome Legal", 3);
console.log(meuGato.nome)
```

&emsp;Dessa vez, você verá no console o nome do gato, que definimos como "Nome Legal". Nesse caso, não é obrigatório passar o nome e idade do gato, mas se tentarmos rodar o mesmo código, mas com a linha alterada para:
```js
let meuGato = new Gato();
```
&emsp;O código não retornaria um erro, mas chamar o console.log(meuGato.nome) retorna *undefined*

## Métodos

&emsp;Agora, você talvez queira que seu gato faça alguma coisa, já que até agora ele é só... ele. Podemos criar métodos dentro da classe para definir seus comportamentos. Vamos começar criando um método miar.

```js
class Gato{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.patas = 4;
    }
    miar(){
        console.log("Miau")
    }
}
let meuGato = new Gato("Nome Legal", 3);
```

&emsp;Depois de instanciar o gato, nós podemos pedir para ele miar da seguinte forma:

```js
class Gato{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.patas = 4;
    }
    miar(){
        console.log("Miau")
    }
}
let meuGato = new Gato("Nome Legal", 3);
meuGato.miar();
```

&emsp;Rodar o código retorna Miau

## Herança

&emsp;Essa classe gato serve para conseguirmos instanciar um gato, mas não serve para criar um cachorro, por exemplo. Para isso, seria interessante criar uma classe base, chamada Animal, por exemplo, que será a classe "Mãe" do gato e do cachorro. Depois, podemos extender a classe animal nas outras, permitindo assim ter atributos em comum. Segue exemplo:

```js
class Animal{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }
}
class Gato extends Animal{
    constructor(nome, idade, vidas){
        super(nome, idade);
        this.vidas = vidas;
    }
}
let meuGato = new Gato("Mingau", 2, 7)
console.log(meuGato.nome)
```

&emsp;Da mesma forma, se tivermos um método na classe mãe, todas as classes que herdam (estendem) dela também contém esse método. Observe:

```js
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
}
let meuGato = new Gato("Mingau", 2, 7);
console.log(meuGato.idade);
meuGato.crescer();
```

&emsp; Este código retorna o método crescer(), com a idade atualizada do gato mesmo que a classe Gato não tenha explicitamente declarado o método. Se quisermos estender essa funcionalidade no gato, com por exemplo falar quantas vidas o gato ainda tem, podemos utilizar o *super* de forma similar ao constructor:

```js
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
```
&emsp;Caso prefira ignorar o que havia antes naquele método e só recriar o método com o mesmo nome da classe mãe, simplesmente não utilize o *super*. O método:

```js
crescer(){
    console.log(`${this.nome} cresceu! Ele agora tem ${this.idade} anos e ${this.vidas} vidas!`)
}
```

&emsp;Substituiria completamente o método original