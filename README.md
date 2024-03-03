# mycontacts

API criada como parte do curso **JSTACK**.
Todas as notas contidas são de inteira responsabilidade de seu autor.

### Objetivo

  O objetivo desse projeto é criar uma API usando Node.js que controle o funcionamento
  de uma agenda de contatos online, usando CRUD e conceitos de programação para
  o aprendizado da linguagem de programação javascript.

### Aprendizado

  Nesse projeto aprendi a criar um servidor com Express, instalar e configurar o
  Nodemon, para agilizar a programação e o recarregamento do servidor para testes locais.

  Esse projeto está usando o ESLint com o padrão Airbnb para a identação e
  formatação do código escrito, assim como o editconfig para a padronização do
  editor de código, no caso, VS Code.
  Aprendi sobre Repository Pattern e Middlewares.

  Para o banco de dados foi escolhido o Postgres usando Docker para manter a
  consistência e versões da base de dados.

## Instruções Docker.

  1) Criar o contâiner docker.
     
    
    docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
    
  2) Usar o arquivo ***schema.sql*** dentro da pasta ___database___ para criar
    tabelas dentro da base de dados.

  [texto será atualizado conforme novos aprendizados.]
