# Encurtado de URL
Projeto criado para a seleção do cargo Desenvolvedor, Teddy Open Finance. O projeto utiliza  para o backend, faz uso de Node.js e express. O banco de dados utilizado foi o PostgreSQL, o qual foi integrado ao backend utilizando a Mikro-orm.

### Objetivo
Elaborar uma aplicação capaz de encurtar URLs fornecidas pelo usuário

### Pré-requisitos
* Node.js 16.14.2: https://nodejs.org/en
* Docker: https://docs.docker.com/get-docker/
* NPM: https://www.npmjs.com/

### Executando a aplicação
##### Backend
1. Entre na pasta api utilizando o comando  $ cd url-shortner
2. Na raiz da API, crie um arquivo .env segundo o exemplo contido no arquivo .env.example.
3. Execute os seguintes comando
```bash
$ npm install //irá instalar as dependências necessárias

$ docker-compose up -d //irá iniciar o postgress

$ npm run db:setup //irá criar as tableas e configurar o banco de dados

$ npm run dev //
```

4. Para execuçãs da API basta importa o arquivo insomnia dentro da pasta docs 
5. Ao passar a url original e executar a função basta clicar na url que foi dada como resposta para ser redirecionado para página desejada

##### Melhorias

1. Utilização de Redis para criação de memória cache possibilitando um acesso mais rápido a urls encurtadas
