# E-commerce de doces em construção 🚧 🏗️

Este é um projeto em construção de um e-commerce de doces. Abaixo estão as instruções sobre como executar o frontend localmente e via Docker.

## Executando o Frontend Localmente
Certifique-se de ter o Node.js instalado em seu sistema. Você pode baixá-lo em [Node.js](https://nodejs.org/).
1. Clone o repositório para o seu computador: `git@github.com:naiaraxavier/ecommerce-de-doces.git`

2. Abra um terminal e navegue até a pasta `frontend` do projeto:
```
cd ecommerce-de-doces/app/frontend
```
3. Instale as dependências do projeto executando o seguinte comando:
```
npm install
```
4. Após a instalação das dependências, inicie o servidor de desenvolvimento local executando:
```
npm run dev
```
5. O servidor de desenvolvimento será iniciado e você poderá acessar o aplicativo em seu navegador acessando `http://localhost:3000`.


## Executando o Frontend via Docker
Certifique-se de ter o Docker instalado em seu sistema. Você pode baixá-lo em [Docker](https://www.docker.com/).
1. Abra um terminal e navegue até a pasta `ecommerce-de-doces/app`, onde se encontra o arquivo `docker-compose.yml`
```
cd ecommerce-de-doces/app
``` 
2. Execute o seguinte comando para iniciar o aplicativo via Docker Compose:
```
docker-compose up -d
```
3. Aguarde até que o Docker construa a imagem e inicie o contêiner. Após a conclusão, você poderá acessar o aplicativo em seu navegador acessando `http://localhost:3000`
