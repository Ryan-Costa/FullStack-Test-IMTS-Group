# API de Gerenciamento de Apartamentos e Veículos

### Esta é uma API construída com Node.js, Express e TypeORM para gerenciar apartamentos e veículos associados. A API permite criar, atualizar, excluir e listar apartamentos e veículos, com regras de negócios específicas para validação de dados.

Pré-requisitos
Node.js (versão 14 ou superior)
PostgreSQL
Yarn

### Configuração do Ambiente

```
git clone
```
```
yarn install
```
#### Configuração de Banco de Dados

```
TYPEORM_CONNECTION=postgres
TYPEORM_HOST=localhost
TYPEORM_USERNAME=seu_usuario
TYPEORM_PASSWORD=sua_senha
TYPEORM_DATABASE=nome_do_banco
TYPEORM_PORT=5432
TYPEORM_MIGRATIONS=src/database/migrations/*.ts
TYPEORM_MIGRATIONS_DIR=src/database/migrations
```

#### Iniciar projeto

```
yarn typeorm migration:run -d src/data-source.ts
```
```
yarn dev
```

### Rotas da API

### /apartments
#### GET
#### POST
```
{
  "block": 1,
  "apartmentNumber": 101,
  "resident": "John Doe",
  "phone": "12345678901",
  "email": "john.doe@example.com"
}
```
#### PUT
```
{
  "block": 1,
  "apartmentNumber": 101,
  "resident": "John Doe",
  "phone": "12345678901",
  "email": "john.doe@example.com"
}
```
#### DELETE


### /vehicles
#### GET
#### POST
```
{
  "brand": "Toyota",
  "model": "Corolla",
  "color": "Blue",
  "plate": "AAA1234",
  "apartment_id": 1
}
```
#### PUT
```
{
  "brand": "Toyota",
  "model": "Corolla",
  "color": "Blue",
  "plate": "AAA1234",
  "apartment_id": 1
}
```
#### DELETE

### Regras de Negócio

Cada apartamento pode ter no máximo um veículo, exceto apartamentos nos andares 10, 11 e 12, que podem ter até dois veículos.
A placa do veículo deve seguir o formato AAA0000 ou AAA0A00 e ser única.
O número de telefone deve conter exatamente 11 dígitos.
O email deve seguir o formato padrão de email (contendo "@").


### Minhas considerações

#### Infelizmente, não consegui finalizar o CRUD no frontend. Gostaria de ter tido mais tempo, mas estou muito contente com meu desempenho até aqui. Foram 1 dia e meio focado na realização da atividade, que me desafiou bastante. Não sou desenvolvedor backend; gosto mais do frontend e do React, mas aprendi a fazer melhor do que todas as experiências anteriores que tive.s eu aprendi de fato a fazer melhor do que todas as anteriores que tenha feito. 
#### Sobre o Angular, nunca havia trabalhado com o framework. Achei difícil, principalmente porque ele muda constantemente. Foi complicado resolver alguns erros devido à falta de informações, já que iniciei na versão mais recente. No entanto, estou satisfeito com o que consegui realizar. Posso dizer que agora sei fazer um CRUD completo full-stack com Node.js, Express e Angular. Embora não tenha finalizado, fui muito longe e acredito que finalizaria se tivesse mais tempo.
#### Por fim, quero agradecer a oportunidade de realizar este desafio. Foi realmente enriquecedor.
