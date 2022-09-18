/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('states').insert([
    {id: 1, code: 11, abbreviation: 'RO', name: 'RONDONIA', countryId: 1058, statusId: 1, created: new Date, updated: new Date},
    {id: 2, code: 12, abbreviation: 'AC', name: 'ACRE', countryId: 1058, statusId: 1, created: new Date, updated: new Date},
    {id: 3, code: 13, abbreviation: 'AM', name: 'AMAZONAS', countryId: 1058, statusId: 1, created: new Date, updated: new Date},
    {id: 4, code: 14, abbreviation: 'RR', name: 'RORAIMA', countryId: 1058, statusId: 1, created: new Date, updated: new Date},
    {id: 5, code: 15, abbreviation: 'PA', name: 'PARA', countryId: 1058, statusId: 1, created: new Date, updated: new Date},
    {id: 6, code: 16, abbreviation: 'AP', name: 'AMAPA', countryId: 1058, statusId: 1, created: new Date, updated: new Date},
    {id: 7, code: 17, abbreviation: 'TO', name: 'TOCANTINS', countryId: 1058, statusId: 1, created: new Date, updated: new Date},
    {id: 8, code: 21, abbreviation: 'MA', name: 'MARANHAO', countryId: 1058, statusId: 1, created: new Date, updated: new Date},
    {id: 9, code: 22, abbreviation: 'PI', name: 'PIAUI', countryId: 1058, statusId: 1, created: new Date, updated: new Date},
    {id: 10, code: 23, abbreviation: 'CE', name: 'CEARA', countryId: 1058, statusId: 1, created: new Date, updated: new Date},
    {id: 11, code: 24, abbreviation: 'RN', name: 'RIO GRANDE DO NORTE', countryId: 1058, statusId: 1, created: new Date, updated: new Date},
    {id: 12, code: 25, abbreviation: 'PB', name: 'PARAIBA', countryId: 1058, statusId: 1, created: new Date, updated: new Date},
    {id: 13, code: 26, abbreviation: 'PE', name: 'PERNAMBUCO', countryId: 1058, statusId: 1, created: new Date, updated: new Date},
    {id: 14, code: 27, abbreviation: 'AL', name: 'ALAGOAS', countryId: 1058, statusId: 1, created: new Date, updated: new Date},
    {id: 15, code: 28, abbreviation: 'SE', name: 'SERGIPE', countryId: 1058, statusId: 1, created: new Date, updated: new Date},
    {id: 16, code: 29, abbreviation: 'BA', name: 'BAHIA', countryId: 1058, statusId: 1, created: new Date, updated: new Date},
    {id: 17, code: 31, abbreviation: 'MG', name: 'MINAS GERAIS', countryId: 1058, statusId: 1, created: new Date, updated: new Date},
    {id: 18, code: 32, abbreviation: 'ES', name: 'ESPIRITO SANTO', countryId: 1058, statusId: 1, created: new Date, updated: new Date},
    {id: 19, code: 33, abbreviation: 'RJ', name: 'RIO DE JANEIRO', countryId: 1058, statusId: 1, created: new Date, updated: new Date},
    {id: 20, code: 35, abbreviation: 'SP', name: 'SAO PAULO', countryId: 1058, statusId: 1, created: new Date, updated: new Date},
    {id: 21, code: 41, abbreviation: 'PR', name: 'PARANA', countryId: 1058, statusId: 1, created: new Date, updated: new Date},
    {id: 22, code: 42, abbreviation: 'SC', name: 'SANTA CATARINA', countryId: 1058, statusId: 1, created: new Date, updated: new Date},
    {id: 23, code: 43, abbreviation: 'RS', name: 'RIO GRANDE DO SUL', countryId: 1058, statusId: 1, created: new Date, updated: new Date},
    {id: 24, code: 50, abbreviation: 'MS', name: 'MATO GROSSO DO SUL', countryId: 1058, statusId: 1, created: new Date, updated: new Date},
    {id: 25, code: 51, abbreviation: 'MT', name: 'MATO GROSSO', countryId: 1058, statusId: 1, created: new Date, updated: new Date},
    {id: 26, code: 52, abbreviation: 'GO', name: 'GOIAS', countryId: 1058, statusId: 1, created: new Date, updated: new Date},
    {id: 27, code: 53, abbreviation: 'DF', name: 'DISTRITO FEDERAL', countryId: 1058, statusId: 1, created: new Date, updated: new Date},
    {id: 28, code: 99, abbreviation: 'EX', name: 'EXTERIOR', countryId: 1058, statusId: 1, created: new Date, updated: new Date},
  ]);
};
