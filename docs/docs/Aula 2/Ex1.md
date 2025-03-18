---
title: Exercício 1
slug: ex1
sidebar_position: 2
---

# Exercício
![Exercicio](/img/Aula2/ex1.png)

<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

# Resposta

Resposta: I, III e IV.
O gabarito faz referência ao conteúdo da revisão de classes, principalmente à classe Gato
I está correto, já que o constructor é um método (função da classe) que roda ao inicializar o objeto.  
II está incorreto, já que *extends* é utilizado para criar a classe filha, não a mãe. Basta lembrar que gato é uma extensão de animal, e não o contrário
III está correto, já que o *this* se refere à propriedade daquele objeto que está chamando. Usando o exemplo de gatos, gatos tem nomes, mas o meuGato (meu objeto da classe Gato) tem **esse** (this) nome.
IV está correto, uma vez que não é preciso chamar explicitamente o constructor com meuGato.constructor(), já que ele é automaticamente chamado ao se criar uma nova instância do objeto da classe.