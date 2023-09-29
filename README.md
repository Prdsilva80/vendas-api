# API de Vendas de Automóveis

Esta é uma API simples para rastrear vendas de automóveis e vendedores que mais venderam durante o mês. A API foi desenvolvida usando Node.js, TypeScript, SQLite e Knex.js.

## Funcionalidades

- Adição de vendas de automóveis com detalhes como vendedor, carro, quantidade e data.
- Consulta das vendas realizadas durante o mês corrente por vendedor.

## Como Fazer Funcionar

Siga estas etapas para executar a API em sua máquina:

1. Clone este repositório:

   ```
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Navegue até o diretório do projeto:
    ```
    cd nome-do-
    ```

3. Instale as dependências:
    ```
    npm install
    ```

4. Execute as migrações para criar a tabela no banco de dados:
    ```
    knex migrate:latest
    ```

5. Execute as sementes para adicionar dados de exemplo:
    ```
    knex seed:run
    ```

6. Inicie o servidor:
    ```
    npm start
    ```

A API estará em execução em http://localhost:3000.

## Rotas

- **POST /vendas**: Adicionar uma nova venda de automóvel.
- **GET /vendas/mes-atual**: Obter as vendas do mês atual por vendedor.

## Contribuição

Se você deseja contribuir para este projeto, siga estas etapas:

1. Faça um fork do repositório.

2. Crie uma nova branch com suas alterações: git checkout -b minha-alteracao.

3. Faça commit das suas alterações: git commit -m "Minha contribuição".

4. Faça push para a sua branch: git push origin minha-alteracao.

5. Crie um pull request no repositório original.


### Ficaremos felizes em revisar e aceitar contribuições!

Este projeto foi desenvolvido como exemplo e pode ser personalizado para atender às suas necessidades específicas. Sinta-se à vontade para fazer ajustes e melhorias conforme necessário.