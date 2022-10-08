/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('states').insert([
    {id: 1, code: 11, abbreviation: 'RO', name: 'RONDONIA', country_id: 1058, status_id: 1, created: new Date, updated: new Date},
    {id: 2, code: 12, abbreviation: 'AC', name: 'ACRE', country_id: 1058, status_id: 1, created: new Date, updated: new Date},
    {id: 3, code: 13, abbreviation: 'AM', name: 'AMAZONAS', country_id: 1058, status_id: 1, created: new Date, updated: new Date},
    {id: 4, code: 14, abbreviation: 'RR', name: 'RORAIMA', country_id: 1058, status_id: 1, created: new Date, updated: new Date},
    {id: 5, code: 15, abbreviation: 'PA', name: 'PARA', country_id: 1058, status_id: 1, created: new Date, updated: new Date},
    {id: 6, code: 16, abbreviation: 'AP', name: 'AMAPA', country_id: 1058, status_id: 1, created: new Date, updated: new Date},
    {id: 7, code: 17, abbreviation: 'TO', name: 'TOCANTINS', country_id: 1058, status_id: 1, created: new Date, updated: new Date},
    {id: 8, code: 21, abbreviation: 'MA', name: 'MARANHAO', country_id: 1058, status_id: 1, created: new Date, updated: new Date},
    {id: 9, code: 22, abbreviation: 'PI', name: 'PIAUI', country_id: 1058, status_id: 1, created: new Date, updated: new Date},
    {id: 10, code: 23, abbreviation: 'CE', name: 'CEARA', country_id: 1058, status_id: 1, created: new Date, updated: new Date},
    {id: 11, code: 24, abbreviation: 'RN', name: 'RIO GRANDE DO NORTE', country_id: 1058, status_id: 1, created: new Date, updated: new Date},
    {id: 12, code: 25, abbreviation: 'PB', name: 'PARAIBA', country_id: 1058, status_id: 1, created: new Date, updated: new Date},
    {id: 13, code: 26, abbreviation: 'PE', name: 'PERNAMBUCO', country_id: 1058, status_id: 1, created: new Date, updated: new Date},
    {id: 14, code: 27, abbreviation: 'AL', name: 'ALAGOAS', country_id: 1058, status_id: 1, created: new Date, updated: new Date},
    {id: 15, code: 28, abbreviation: 'SE', name: 'SERGIPE', country_id: 1058, status_id: 1, created: new Date, updated: new Date},
    {id: 16, code: 29, abbreviation: 'BA', name: 'BAHIA', country_id: 1058, status_id: 1, created: new Date, updated: new Date},
    {id: 17, code: 31, abbreviation: 'MG', name: 'MINAS GERAIS', country_id: 1058, status_id: 1, created: new Date, updated: new Date},
    {id: 18, code: 32, abbreviation: 'ES', name: 'ESPIRITO SANTO', country_id: 1058, status_id: 1, created: new Date, updated: new Date},
    {id: 19, code: 33, abbreviation: 'RJ', name: 'RIO DE JANEIRO', country_id: 1058, status_id: 1, created: new Date, updated: new Date},
    {id: 20, code: 35, abbreviation: 'SP', name: 'SAO PAULO', country_id: 1058, status_id: 1, created: new Date, updated: new Date},
    {id: 21, code: 41, abbreviation: 'PR', name: 'PARANA', country_id: 1058, status_id: 1, created: new Date, updated: new Date},
    {id: 22, code: 42, abbreviation: 'SC', name: 'SANTA CATARINA', country_id: 1058, status_id: 1, created: new Date, updated: new Date},
    {id: 23, code: 43, abbreviation: 'RS', name: 'RIO GRANDE DO SUL', country_id: 1058, status_id: 1, created: new Date, updated: new Date},
    {id: 24, code: 50, abbreviation: 'MS', name: 'MATO GROSSO DO SUL', country_id: 1058, status_id: 1, created: new Date, updated: new Date},
    {id: 25, code: 51, abbreviation: 'MT', name: 'MATO GROSSO', country_id: 1058, status_id: 1, created: new Date, updated: new Date},
    {id: 26, code: 52, abbreviation: 'GO', name: 'GOIAS', country_id: 1058, status_id: 1, created: new Date, updated: new Date},
    {id: 27, code: 53, abbreviation: 'DF', name: 'DISTRITO FEDERAL', country_id: 1058, status_id: 1, created: new Date, updated: new Date},
    {id: 28, code: 99, abbreviation: 'EX', name: 'EXTERIOR', country_id: 1058, status_id: 1, created: new Date, updated: new Date},
  ]);
};
