// src/database/seeds/seed_vendas.js

exports.seed = function (knex: (arg0: string) => { (): any; new(): any; del: { (): Promise<any>; new(): any; }; insert: { (arg0: { vendedor: string; carro: string; quantidade: number; data: string; }[]): any; new(): any; }; }) {
    // Deletes ALL existing entries
    return knex('vendas')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('vendas').insert([
                { vendedor: 'Vendedor 1', carro: 'Carro 1', quantidade: 5, data: '2023-09-10' },
                { vendedor: 'Vendedor 2', carro: 'Carro 2', quantidade: 3, data: '2023-09-15' },
                // Adicione mais dados aqui
            ]);
        });
};
