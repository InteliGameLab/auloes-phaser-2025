# Introdução ao PhaserJS

PhaserJS é um framework poderoso para a criação de jogos em HTML5. Ele fornece uma estrutura simples e eficiente para desenvolver jogos interativos diretamente no navegador.

Neste guia, abordaremos as funções básicas do PhaserJS, incluindo as etapas principais para carregar recursos, criar cenas e atualizar elementos no jogo.

---

## Estrutura Básica de um Jogo no PhaserJS

Um jogo no Phaser segue um ciclo padrão que envolve três funções principais:

- **preload()**: Carrega os recursos (imagens, áudios, sprites, etc.).
- **create()**: Configura os objetos na cena.
- **update()**: Atualiza o jogo em tempo real.

A estrutura básica de um jogo no PhaserJS é a seguinte:

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

Para adicionar imagens ao jogo, primeiro carregamos os recursos na função `preload()` e depois os exibimos na função `create()`.

Exemplo:

```javascript
function preload() {
    this.load.image('player', 'assets/player.png');
}

function create() {
    this.add.image(400, 300, 'player');
}
```

No exemplo acima, carregamos uma imagem chamada `player.png` e depois a exibimos no centro da tela.

---

## Mecânica de Movimentação

Para movimentar um objeto, podemos usar o teclado e atualizar sua posição na função `update()`.

Exemplo de movimentação com setas do teclado:

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

Neste exemplo:
- Criamos um sprite `player` e ativamos física nele.
- Definimos `cursors` para capturar entradas do teclado.
- No `update()`, ajustamos a velocidade do player conforme as teclas pressionadas.

---