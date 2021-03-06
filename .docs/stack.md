# Stack application

A aplicação foi escrita em React para facilitar
a criação de componentes e o acoplamento deles.

Dessa forma, a stack foi construída para que o
o app fosse constituído da melhor forma.

[webpack 2.x](https://webpack.js.org/)
---
webpack é resumidamente uma ferramenta para
fazer o compile da aplicação que usa 
tecnologias ainda não suportadas por todos os
navegadores.

No contexto da aplicação desenvolvida, foi 
optado por utilizar a versão 2 do webpack por 
motivos de performance na criação do bundle
do app, por ser uma versão estável da 
ferramenta, onde os principais `loaders` usados
no webpack são exemplificados já na nova versão 
do webpack e tanto os novos e os velhos pacotes
serem compatíveis e escritos para essa nova 
versão.

[NodeJS](https://nodejs.org/en/) & [Express](http://expressjs.com/pt-br/)
---
À fim de ter um maior controle da aplicação, ela foi
contruída rodando em um server escrito com Express,
desenvolvido em NodeJS.

### [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware)
Através do middleware que o webpack dispõe, o 
`webpack-dev-middleware`, pode-se acomplar o bundle da
aplicação através do NodeJS. 

### [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware)
Para habilitar o hot reloading na aplicação, usando o 
Express, o webpack dispõe o middleware, 
`webpack-hot-middleware`, para que o hot reloading 
seja habilitado no server do Express.

[Docker](http://docker.com/)
---

[Heroku](https://dashboard.heroku.com/)
---

[Travis CI](https://travis-ci.org/)
---

[Codacy](https://travis-ci.org/)
---

[Codecov](https://codecov.io/gh)
---

[Semantic UI](https://semantic-ui.com/)
---

Podemos dizer que o Semantic UI é 
framework css, ou um *style guide* 
para que você possa montar os 
componentes da sua aplicação facilmente,
usando estilos pré definidos como base
para que você montar seus próprios.

Umas das maiores vantagens da utilização
do Semantic UI é que ele auxilia e bastante
a manter o conceito de *mobile first* 
da sua aplicação através da `grid` de
16 colunas que ele te proporciona.

### semantic-ui-react

Através do Semantic UI você pode usar 
uma integração que o semantic te 
proporciona para usa-lo em aplicações 
React.

*Veja mais sobre [aqui](https://semantic-ui.com/)*
