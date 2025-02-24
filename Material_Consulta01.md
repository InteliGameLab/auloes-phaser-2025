# :computer: Introdução à Programação com JavaScript

A programação é como ensinar um computador a resolver problemas por meio de instruções. Assim como ensinamos alguém a seguir uma receita ou um conjunto de regras, um programa segue comandos escritos por um programador.

## **1. O que é Programação?**
Programação é o processo de escrever códigos que um computador pode entender e executar. Basicamente, ela envolve:

1. **Entrada**: O programa recebe informações (como um formulário preenchido pelo usuário).
2. **Processamento**: O programa analisa e manipula essas informações.
3. **Saída**: O programa gera um resultado (como exibir uma mensagem na tela ou salvar um arquivo).

### **1.1 Algoritmos**
Um **algoritmo** é um conjunto de passos para resolver um problema. No dia a dia, seguimos algoritmos sem perceber.

🔹 **Exemplo: Como fazer um café ☕**
1. Pegar um filtro de café.
2. Colocar o pó de café no filtro.
3. Ferver a água.
4. Despejar a água quente no filtro.
5. Servir o café na xícara.

Se fizermos algo na ordem errada (como despejar a água antes do pó), o café não sairá certo. O mesmo acontece na programação: a sequência de comandos precisa ser lógica para o programa funcionar corretamente.

Mas além de fazer um programa lógico, é preciso escrevê-lo na linguagem correta, pois imagine que você está ensinando o seu amigo a fazer café em inglês, mas seu amigo só entende português... Ele não entenderá quase nada, assim como se você escrever um programa em uma linguagem que o computador não entende. 

Por conta disso, é preciso escrever essas instruções em uma linguagem que o computador entende, chamada **linguagem de programação**. Logo, Um programador escreve um conjunto de comandos (um programa) para resolver um problema específico.

Atualmente existem inúmeras linguagens de programação, como Python, C#, Java, PHP, Ruby e JavaScript, que é a linguagem que será utilizada para o desenvolvimento de jogos com Phaser. 

---

## 2. O que é JavaScript?
Como dito anteriormente, o JavaScript é uma das linguagens de programação mais populares, usada principalmente para criar interatividade em páginas da web.

🔹 **Exemplo: Sites Dinâmicos**
- Quando você clica em um botão e algo muda na tela, é JavaScript trabalhando.
- Quando um site valida um formulário antes de enviá-lo, JavaScript está verificando os dados.

### 2.1 Características do JavaScript
- **Linguagem interpretada**: O código é executado diretamente no navegador, sem precisar de compilação.  
- **Dinamicamente tipada**: As variáveis podem mudar de tipo conforme necessário.  
- **Multiparadigma**: Pode ser usada de maneira funcional, estruturada ou orientada a objetos.  
- **Executada no navegador**: O JavaScript roda diretamente no navegador, sem precisar de instalação extra.

Mas e agora? Vamos entender como escrever comandos em JavaScript para o computador realizar?

## 3. Variáveis - O Armazém de Informações
Uma **variável** é um espaço na memória do computador onde armazenamos informações. Pense nela como uma **caixa** onde guardamos dados para usar depois.

### **3.1 Como Declarar Variáveis em JavaScript**
Em JavaScript, existem três formas principais de declarar variáveis:
1. **var** – Antigo, usado globalmente.  
2. **let** – Mais seguro, usado dentro de blocos de código.  
3. **const** – Para valores que nunca mudam.

```javascript
var nome = "Ana";   // Pode ser acessado em qualquer parte do código
let idade = 25;     // Só pode ser acessado dentro do bloco onde foi criada
const pais = "Brasil"; // Valor que nunca muda
```

🔹 **Exemplo no dia a dia:**  
- Seu **nome** é um valor fixo, então pode ser uma `const`.  
- Sua **idade** muda a cada ano, então pode ser um `let`.  
- Um **contador de cliques** que deve ser atualizado pode ser um `var` (embora `let` seja mais seguro).

---

## 4. Escopo - Onde as Variáveis Existem
O **escopo** define onde uma variável pode ser usada dentro do código.

### **4.1 Tipos de Escopo**
- **Escopo Global**: A variável pode ser acessada de qualquer lugar do código.  
- **Escopo Local (de bloco ou função)**: A variável só pode ser acessada dentro do bloco onde foi declarada.

```javascript
var global = "Estou disponível em qualquer parte do código"; 

function exemplo() {
    let local = "Só existo dentro desta função";
    console.log(local);
}

console.log(global); // Funciona
console.log(local);  // Erro! A variável 'local' só existe dentro da função.
```

🔹 **Analogia no dia a dia:**  
- **Escopo global** é como um aviso no quadro de uma escola: todos podem ver.  
- **Escopo local** é como uma conversa entre amigos dentro de uma sala fechada: só quem está lá pode ouvir.

---

## 5. Tipos de Dados - O Que Podemos Armazenar?
As variáveis podem armazenar diferentes tipos de informações. JavaScript possui tipos de dados principais:

### **5.1 Tipos Primitivos**
- **Number** – Números inteiros e decimais.  
- **String** – Texto.  
- **Boolean** – `true` (verdadeiro) ou `false` (falso).  
- **Null** – Representa a ausência de valor.  
- **Undefined** – Variável declarada, mas sem valor atribuído.  

```javascript
let idade = 30;        // Number
let nome = "Carlos";   // String
let aprovado = true;   // Boolean
let vazio = null;      // Null
let naoDefinido;       // Undefined
```

### **5.2 Tipos Especiais**
- **Arrays** – Listas de valores.  
- **Objetos** – Estruturas que guardam múltiplos valores organizados.

```javascript
let frutas = ["Banana", "Maçã", "Laranja"];  // Array
let pessoa = { nome: "Carlos", idade: 30 };  // Objeto
```

🔹 **Exemplo no dia a dia:**  
- Um **array** é como uma lista de compras.  
- Um **objeto** é como um contato na agenda (tem nome, telefone, endereço).

---
## 6. Estruturas condicionais

---

## 6. Estruturas de Repetição 
Às vezes, queremos repetir uma ação várias vezes sem escrever o mesmo código repetidamente. Para isso, usamos os **laços de repetição**.

### **6.1 Laço `for` - Quando Sabemos Quantas Vezes Repetir**
```javascript
for (let i = 1; i <= 5; i++) {
    console.log("Execução número " + i);
}
```
🔹 **Exemplo no dia a dia:** Fazer **10 flexões** na academia.

---

### **6.2 Laço `while` - Quando Não Sabemos o Número Exato de Repetições**
```javascript
let contador = 1;
while (contador <= 5) {
    console.log("Execução número " + contador);
    contador++;
}
```
🔹 **Exemplo no dia a dia:** Esperar até que o semáforo fique verde.

---

### **6.3 Laço `do...while` - Quando Precisamos Executar Pelo Menos Uma Vez**
```javascript
let saldo = 10;
do {
    console.log("Saque realizado!");
    saldo -= 5;
} while (saldo > 0);
```
🔹 **Exemplo no dia a dia:** Lavar as mãos pelo menos uma vez antes de comer, mesmo que elas pareçam limpas.

---

## Exercícios extras
### 1. **Variáveis e Impressão no Console**  

**Enunciado:**  
Crie três variáveis para armazenar:  
- O **nome** de uma pessoa  
- A **idade** dessa pessoa  
- A **cidade onde ela mora**  

Depois, exiba essas informações no console da seguinte forma:  
```
Olá, meu nome é João, tenho 25 anos e moro em São Paulo.
```
**Dica:** Use `console.log()` para exibir a mensagem no formato acima.

---

### **2️. Cálculo de Média**  

**Enunciado:**  
- Peça para o usuário inserir **três notas de um aluno**  
- Calcule a **média das notas**  
- Exiba no console se o aluno foi **Aprovado** (média ≥ 7) ou **Reprovado** (média < 7)  

**Exemplo esperado de saída:**  
```
Média do aluno: 8.5
Aluno APROVADO!
```
**Dica:** Use `let` para armazenar os valores das notas e a **fórmula da média**:  
`media = (nota1 + nota2 + nota3) / 3`

---

### **3️. Contagem Progressiva e Regressiva**
### **Enunciado:**  
- Peça um **número inteiro positivo** para o usuário  
- Exiba a **contagem progressiva** de `1` até esse número  
- Depois, exiba a **contagem regressiva** até `0`  

**Exemplo esperado de saída:**
```
Digite um número: 5
Contagem progressiva: 1, 2, 3, 4, 5
Contagem regressiva: 5, 4, 3, 2, 1, 0
```

**Dica:** Use um **laço `for`** para cada contagem!

---

### **4️. Verificação de Número Par ou Ímpar**  

**Enunciado:**  
- Peça um **número inteiro** para o usuário  
- Verifique se o número é **par ou ímpar**  
- Exiba a mensagem correspondente  

**Exemplo esperado de saída:**  
```
Digite um número: 7
O número 7 é ÍMPAR.
```
**Dica:** Um número é **par** se `numero % 2 === 0`, caso contrário, é **ímpar**.

---

### **5️. Tabuada de Multiplicação**

**Enunciado:**  
- Peça um **número inteiro** ao usuário  
- Exiba a **tabuada desse número de 1 a 10**  

**Exemplo esperado de saída:**  
```
Digite um número: 4
4 x 1 = 4
4 x 2 = 8
...
4 x 10 = 40
```
**Dica:** Use um **laço `for`** para percorrer os números de 1 a 10.

---

### **6️. Números Pares de 1 a 100**

**Enunciado:**  
Exiba no console **todos os números pares de 1 a 100**.  

**Dica:** Use um **laço `for`** e um **`if`** para verificar se o número é par (`numero % 2 === 0`).

---

### **7️. Soma de Números de 1 a N**

**Enunciado:**  
- Peça um número inteiro `N` ao usuário  
- Calcule a **soma de todos os números de 1 até N**  
- Exiba o resultado no console  

**Exemplo esperado de saída:**  
```
Digite um número: 5
A soma dos números de 1 a 5 é: 15
```
**Dica:** Use um **laço `for`** para somar todos os números.

---

### **8️. Número Primo**

**Enunciado:**  
- Peça um número ao usuário  
- Verifique se ele é **primo** ou **não**  
- Exiba o resultado no console  

**Número primo:** Um número que **só é divisível por 1 e por ele mesmo**.  

**Exemplo esperado de saída:**  
```
Digite um número: 7
O número 7 é primo.
```
**Dica:** Use um **laço `for`** para verificar quantos divisores o número tem.

---

### **9️. Inversão de String**

**Enunciado:**  
- Peça uma palavra ao usuário  
- Exiba a palavra **invertida**  

**Exemplo esperado de saída:**  
```
Digite uma palavra: casa
Palavra invertida: asac
```
**Dica:** Percorra a string de trás para frente usando um **laço `for`**.

---

### **10. Contador de Vogais**

**Enunciado:**  
- Peça uma palavra ao usuário  
- Conte **quantas vogais** (a, e, i, o, u) existem na palavra  
- Exiba o resultado  

**Exemplo esperado de saída:**  
```
Digite uma palavra: banana
A palavra "banana" tem 3 vogais.
```
**Dica:** Verifique se cada letra da palavra é uma vogal e conte usando um **laço `for`**.

---

### **Desafio Bônus - Fibonacci**  
**Fibonacci** é uma sequência onde **cada número é a soma dos dois anteriores**:  
`0, 1, 1, 2, 3, 5, 8, 13, ...`  

**Enunciado:**  
- Peça um **número `N`** ao usuário  
- Exiba os **`N` primeiros números da sequência de Fibonacci**  

**Exemplo esperado de saída:**  
```
Digite um número: 6
Sequência de Fibonacci: 0, 1, 1, 2, 3, 5
```
**Dica:** Use **variáveis para armazenar os dois últimos números da sequência** e um **laço `for`** para calcular os próximos.