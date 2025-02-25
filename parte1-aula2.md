# Introdução ao PhaserJS

&emsp;PhaserJS é um framework poderoso para a criação de jogos em HTML5. Ele fornece uma estrutura simples e eficiente para desenvolver jogos interativos diretamente no navegador.

&emsp;Neste guia, abordaremos as funções básicas do PhaserJS, incluindo as etapas principais para carregar recursos, criar cenas e atualizar elementos no jogo.

---

## Estrutura Básica de um Jogo no PhaserJS

&emsp;Um jogo no Phaser segue um ciclo padrão que envolve três funções principais:

- **preload()**: Carrega os recursos (imagens, áudios, sprites, etc.).
- **create()**: Configura os objetos na cena.
- **update()**: Atualiza o jogo em tempo real.

&emsp;A estrutura básica de um jogo no PhaserJS é a seguinte:

```javascript
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    // Carregar imagens e outros recursos aqui
}

function create() {
    // Criar elementos na tela
}

function update() {
    // Atualizar elementos a cada frame
}
```

---

## Adicionando Imagens na Tela

&emsp;Para adicionar imagens ao jogo, primeiro carregamos os recursos na função `preload()` e depois os exibimos na função `create()`.

&emsp;Exemplo:

```javascript
function preload() {
    this.load.image('player', 'assets/player.png');
}

function create() {
    this.add.image(400, 300, 'player');
}
```

&emsp;No exemplo acima, carregamos uma imagem chamada `player.png` e depois a exibimos no centro da tela.

---

## Mecânica de Movimentação

&emsp;Para movimentar um objeto, podemos usar o teclado e atualizar sua posição na função `update()`.

&emsp;Exemplo de movimentação com setas do teclado:

```javascript
let player;
let cursors;

function preload() {
    this.load.image('player', 'assets/player.png');
}

function create() {
    player = this.physics.add.sprite(400, 300, 'player');
    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    if (cursors.left.isDown) {
        player.setVelocityX(-160);
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);
    } else {
        player.setVelocityX(0);
    }

    if (cursors.up.isDown) {
        player.setVelocityY(-160);
    } else if (cursors.down.isDown) {
        player.setVelocityY(160);
    } else {
        player.setVelocityY(0);
    }
}
```

&emsp;Neste exemplo:
- Criamos um sprite `player` e ativamos física nele.
- Definimos `cursors` para capturar entradas do teclado.
- No `update()`, ajustamos a velocidade do player conforme as teclas pressionadas.

### Ponto importante!!!
&emsp;Quando se trata de movimentação, é possível criar diferentes lógicas na programação de acordo com as suas necessidades. O código acima permite que você mova o "player" em diagonalmente, mas caso você não queira que isso aconteça, um exemplo abaixo seria uma das lógicas que poderiam ser implementadas: 


```javascript
let lastKey = null; // Armazena a última tecla pressionada

function update() {
    let velocityX = 0;
    let velocityY = 0;

    if (cursors.left.isDown || cursors.right.isDown || cursors.up.isDown || cursors.down.isDown) {
        // Define a última tecla pressionada
        if (cursors.left.isDown) {
            lastKey = 'left';
        } else if (cursors.right.isDown) {
            lastKey = 'right';
        } else if (cursors.up.isDown) {
            lastKey = 'up';
        } else if (cursors.down.isDown) {
            lastKey = 'down';
        }
    }

    // Move apenas no eixo correspondente à última tecla pressionada
    if (lastKey === 'left') {
        velocityX = -160;
    } else if (lastKey === 'right') {
        velocityX = 160;
    } else if (lastKey === 'up') {
        velocityY = -160;
    } else if (lastKey === 'down') {
        velocityY = 160;
    }

    // Se nenhuma tecla estiver pressionada, reseta o lastKey
    if (!cursors.left.isDown && !cursors.right.isDown && !cursors.up.isDown && !cursors.down.isDown) {
        lastKey = null;
    }

    player.setVelocityX(velocityX);
    player.setVelocityY(velocityY);
}
```

## Definindo Hitbox no PhaserJS

&emsp;A hitbox define a área de colisão do objeto, sendo essencial para detectar interações no jogo.

&emsp;Para modificar a hitbox de um sprite, podemos usar `setSize()` e `setOffset()`:

```javascript
function create() {
    player = this.physics.add.sprite(400, 300, 'player');
    player.setSize(32, 48); // Define uma hitbox menor
    player.setOffset(16, 24); // Ajusta a posição da hitbox dentro do sprite
}
```
&emsp;Isso é útil quando a imagem do sprite tem espaços vazios ao redor do personagem ou quando queremos uma área de colisão mais precisa.

## Modo Debug da Hitbox
&emsp;Para visualizar a hitbox e depurar colisões, podemos ativar o modo debug do sistema de física.
```javascript
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true // Habilita a exibição das hitboxes
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
```
&emsp;Com essa configuração, todas as hitboxes dos objetos com física serão desenhadas na tela, facilitando ajustes e correções.

&emsp;Se quiser habilitar o debug apenas para um objeto específico, você pode adicionar:

```javascript
this.physics.world.createDebugGraphic();
```

&emsp;Isso irá mostrar apenas as hitboxes dos elementos ativos no sistema de física, tornando a depuração mais precisa.