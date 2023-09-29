// src/database/migrations/20230929150000_create_vendas.js

exports.up = function (knex: { schema: { createTable: (arg0: string, arg1: (table: any) => void) => any; }; }) {
    return knex.schema.createTable('vendas', function (table) {
        table.increments('id').primary();
        table.string('vendedor');
        table.string('carro');
        table.integer('quantidade');
        table.date('data');
    });
};

exports.down = function (knex: { schema: { dropTable: (arg0: string) => any; }; }) {
    return knex.schema.dropTable('vendas');
};
