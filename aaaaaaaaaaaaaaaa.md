
## X.X Mecânica de colisão
    
Dento do Phaser existem alguns tipos de colisão, sendo eles: O Colider e o Overlap
    
## X.X.1 **Colider**:

O **Collider** verifica as *hitboxes* dos dois objetos mencionados na função e impede que eles ocupem o mesmo espaço. No entanto, em alguns casos, seu uso pode não ser recomendado, pois a colisão pode fazer com que os objetos troquem **inércia**, o que pode gerar interações indesejadas.  

Isso é especialmente problemático em objetos como **itens coletáveis**, que podem ser empurrados involuntariamente pelo jogador, ou em situações onde queremos que a colisão ocorra sem afetar a física do objeto, como ao atravessar uma porta ou ativar um interruptor.  

```js
this.physics.add.collider(X, Y, Z);
```

O método `this.physics.add.collider(X, Y, Z)` em Phaser é usado para adicionar uma colisão entre dois objetos, `X` e `Y`. Quando esses dois objetos se tocarem ou se sobrepuserem, a física do jogo vai gerenciar a colisão automaticamente.

Aqui está o que cada parte faz:

1. **`X` e `Y`**: São os dois objetos (ou grupos de objetos) que você deseja que colidam. Eles podem ser sprites, corpos físicos (como objetos com `arcade.physics`), ou grupos de objetos.

2. **Colisão automática**: Diferente do método `overlap`, que verifica sobreposição sem interações físicas diretas, `collider` lida com interações físicas reais. Por exemplo, se os objetos forem sprites com corpos de física, a colisão pode causar um empurrão ou impacto, com base nas configurações dos corpos físicos (massa, elasticidade, etc.).

3. **`Z`**: É a função que vai ser chamada quando ocorrer uma colisão entre `X` e `Y`. Essa função pode ser utilizada para executar ações específicas após a colisão, como emitir um som, trocar a animação dos objetos, aplicar dano, alterar o estado do jogo (por exemplo, diminuir a vida do jogador ou destruir um inimigo), ou até mesmo iniciar um efeito visual.

> **Observação**: É possivel criar uma colisão sem definir uma função a ser chamada, sendo possivel realizar essa colisão dessa forma:
`this.physics.add.collider(X, Y)`

### **Bounce e o efeito da colisão**
Quando dois objetos colidem, eles normalmente param, mas podemos configurar um comportamento mais dinâmico usando a propriedade **bounce**. O **bounce** define o quanto um objeto "quica" ao colidir com outro.  

No **Arcade Physics**, podemos ajustar esse efeito com `setBounce(value)`, onde `value` pode variar de `0` (sem quique) até `1` (quique total, como uma bola de pingue-pongue).  

### Exemplo de uso do **bounce**:
```js
player.setBounce(0.2); // O jogador terá um leve quique ao tocar no chão
bola.setBounce(1); // A bola quicará indefinidamente ao bater nas paredes
```

Se quisermos que um grupo inteiro tenha esse efeito:
```js
let bolas = this.physics.add.group({
    key: 'ball',
    repeat: 5,
    setXY: { x: 100, y: 100, stepX: 150 }
});

// Aplicando bounce para todas as bolas do grupo
bolas.children.iterate(ball => {
    ball.setBounce(1);
});
```

### **Bounce e o efeito da colisão**  
Quando dois objetos colidem, o comportamento deles depende do tipo de corpo físico que possuem:  
- **Se um dos objetos for estático (`setStatic(true)`)**, o outro objeto será impedido de atravessá-lo e parará, a menos que tenha **bounce** configurado.  

> **Dica:** Se estiver criando um **chão**, **plataformas** ou paredes, lembre-se de definir esses objetos como **estáticos** (`setStatic(true)`), para evitar que saiam se movendo ao colidir com outros elementos.  

- **Se ambos forem dinâmicos**, a colisão pode fazer com que troquem inércia e se movimentem conforme suas propriedades físicas, como massa e velocidade.  

### **Quando usar o Collider?**
O **Collider** é útil em diversos cenários, como:
- **Evitar que objetos atravesse o chão e plataformas:**  
  ```js
  this.physics.add.collider(object, platforms);
  ```
- **Criar colisões entre o jogador e obstáculos que devem bloqueá-lo:**  
  ```js
  this.physics.add.collider(player, wall);
  ```
- **Fazer com que caixas empilhadas interajam fisicamente entre si:**  
  ```js
  this.physics.add.collider(boxes, boxes);
  ```

### **Quando não usar o Collider?**
- **Em itens coletáveis**, que devem ser sobrepostos e não bloqueados:  
  ```js
  this.physics.add.overlap(player, coins, collectCoin, null, this);
  ```
- **Em portas ou botões**, onde basta detectar a interação sem impedir o movimento:  
  ```js
  this.physics.add.overlap(player, door, enterDoor, null, this);
  ```

## X.X.2 **Overlap:**
Diferente do **Collider**, que impede a sobreposição de objetos, o **overlap** apenas detecta quando dois objetos se encontram, sem aplicar nenhuma física sobre eles. Isso é útil quando queremos que um objeto reaja ao contato sem bloqueá-lo.  
A função Overlap, possue algumas entradas

```js
this.physics.add.overlap(X,Y,Z, null, this);
```
1. **`X` e `Y`**: São os dois objetos que você está verificando a sobreposição. Esses podem ser sprites, grupos de sprites ou qualquer outro objeto físico que você tenha adicionado à física do jogo.

2. **`Z`**: Esse é o *callback* (função) que será chamado quando a colisão entre `X` e `Y` ocorrer. Ou seja, quando houver sobreposição entre os dois objetos, a função `Z` será executada.

3. **`null`**: Aqui, você tem um valor que pode ser um critério de filtragem adicional. Pode ser um valor que ajude a determinar se a colisão deve ser considerada ou não. Quando você passa `null`, significa que você não está usando nenhum filtro extra e que a sobreposição será verificada sem condições adicionais.

4. **`this`**: Este é o contexto (`this`) da função de callback, ou seja, o escopo em que a função será executada. Geralmente, `this` é o objeto da cena do Phaser (como a instância da cena que está sendo carregada), garantindo que você tenha acesso a propriedades e métodos dessa cena dentro da função de callback.

### **Exemplos de uso do Overlap**
- **Coletar itens sem que o jogador os empurre:**  
  ```js
  this.physics.add.overlap(player, coins, collectCoin, null, this);
  function collectCoin(player, coin) {
      coin.disableBody(true, true); // Faz a moeda desaparecer
  }
  ```
- **Ativar um botão ou interruptor ao tocar nele:**  
  ```js
  this.physics.add.overlap(player, button, activateSwitch, null, this);
  function activateSwitch(player, button) {
      console.log("Interruptor ativado!");
  }
  ```
- **Detectar quando o jogador entra em uma área específica, como uma porta ou checkpoint:**  
  ```js
  this.physics.add.overlap(player, door, enterDoor, null, this);
  function enterDoor(player, door) {
      console.log("Jogador entrou na porta!");
  }
  ```

> **Curiosidade:** O **overlap** é mais leve computacionalmente do que o **Collider**, pois não precisa calcular a separação dos objetos ou lidar com forças físicas.  

