'use strict';

const faker = require("faker");
faker.locale = "pt_BR";
//faker.setLocale("pt_BR");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('compromisso', [
      {
        id: 1,
        fk_usuario_consumidor: faker.random.number({'min': 1, 'max': 200}),
        fk_usuario_servico_especifico: faker.random.number({'min': 1, 'max': 20}),
        date: faker.date.past(1, '2020-05-17'),
        // fk_usuario_prestador: 186,
        // fk_servico: 41,
        // fk_avaliacao: 41,
        horario_inicio: faker.date.past(1, '2020-05-17'),
        horario_fim: faker.date.past(1, '2020-05-17'),
        observacoes: faker.lorem.paragraphs(1),
      },
      {
        id: 2,
        fk_usuario_consumidor: faker.random.number({'min': 1, 'max': 200}),
        fk_usuario_servico_especifico: faker.random.number({'min': 1, 'max': 20}),
        date: faker.date.past(1, '2020-05-17'),
        // fk_usuario_prestador: 105,
        // fk_servico: 73,
        // fk_avaliacao: 73,
        horario_inicio: faker.date.past(1, '2020-05-17'),
        horario_fim: faker.date.past(1, '2020-05-17'),
        observacoes: faker.lorem.paragraphs(1),
      },
      {
        id: 3,
        fk_usuario_consumidor: faker.random.number({'min': 1, 'max': 200}),
        fk_usuario_servico_especifico: faker.random.number({'min': 1, 'max': 20}),
        date: faker.date.past(1, '2020-05-17'),
        // fk_usuario_prestador: 194,
        // fk_servico: 27,
        // fk_avaliacao: 27,
        horario_inicio: faker.date.past(1, '2020-05-17'),
        horario_fim: faker.date.past(1, '2020-05-17'),
        observacoes: faker.lorem.paragraphs(1),
      },
      {
        id: 4,
        fk_usuario_consumidor: faker.random.number({'min': 1, 'max': 200}),
        fk_usuario_servico_especifico: faker.random.number({'min': 1, 'max': 20}),
        date: faker.date.past(1, '2020-05-17'),
        // fk_usuario_prestador: 174,
        // fk_servico: 36,
        // fk_avaliacao: 36,
        horario_inicio: faker.date.past(1, '2020-05-17'),
        horario_fim: faker.date.past(1, '2020-05-17'),
        observacoes: faker.lorem.paragraphs(1),
      },
      {
        id: 5,
        fk_usuario_consumidor: faker.random.number({'min': 1, 'max': 200}),
        fk_usuario_servico_especifico: faker.random.number({'min': 1, 'max': 20}),
        date: faker.date.past(1, '2020-05-17'),
        // fk_usuario_prestador: 141,
        // fk_servico: 73,
        // fk_avaliacao: 73,
        horario_inicio: faker.date.past(1, '2020-05-17'),
        horario_fim: faker.date.past(1, '2020-05-17'),
        observacoes: faker.lorem.paragraphs(1),
      },
      {
        id: 6,
        fk_usuario_consumidor: faker.random.number({'min': 1, 'max': 200}),
        fk_usuario_servico_especifico: faker.random.number({'min': 1, 'max': 20}),
        date: faker.date.past(1, '2020-05-17'),
        // fk_usuario_prestador: 167,
        // fk_servico: 52,
        // fk_avaliacao: 52,
        horario_inicio: faker.date.past(1, '2020-05-17'),
        horario_fim: faker.date.past(1, '2020-05-17'),
        observacoes: faker.lorem.paragraphs(1),
      },
      {
        id: 7,
        fk_usuario_consumidor: faker.random.number({'min': 1, 'max': 200}),
        fk_usuario_servico_especifico: faker.random.number({'min': 1, 'max': 20}),
        date: faker.date.past(1, '2020-05-17'),
        // fk_usuario_prestador: 159,
        // fk_servico: 65,
        // fk_avaliacao: 65,
        horario_inicio: faker.date.past(1, '2020-05-17'),
        horario_fim: faker.date.past(1, '2020-05-17'),
        observacoes: faker.lorem.paragraphs(1),
      },
      {
        id: 8,
        fk_usuario_consumidor: faker.random.number({'min': 1, 'max': 200}),
        fk_usuario_servico_especifico: faker.random.number({'min': 1, 'max': 20}),
        date: faker.date.past(1, '2020-05-17'),
        // fk_usuario_prestador: 49,
        // fk_servico: 69,
        // fk_avaliacao: 69,
        horario_inicio: faker.date.past(1, '2020-05-17'),
        horario_fim: faker.date.past(1, '2020-05-17'),
        observacoes: faker.lorem.paragraphs(1),
      },
      {
        id: 9,
        fk_usuario_consumidor: faker.random.number({'min': 1, 'max': 200}),
        fk_usuario_servico_especifico: faker.random.number({'min': 1, 'max': 20}),
        date: faker.date.past(1, '2020-05-17'),
        // fk_usuario_prestador: 5,
        // fk_servico: 62,
        // fk_avaliacao: 62,
        horario_inicio: faker.date.past(1, '2020-05-17'),
        horario_fim: faker.date.past(1, '2020-05-17'),
        observacoes: faker.lorem.paragraphs(1),
      },
      {
        id: 10,
        fk_usuario_consumidor: faker.random.number({'min': 1, 'max': 200}),
        fk_usuario_servico_especifico: faker.random.number({'min': 1, 'max': 20}),
        date: faker.date.past(1, '2020-05-17'),
        // fk_usuario_prestador: 188,
        // fk_servico: 28,
        // fk_avaliacao: 28,
        horario_inicio: faker.date.past(1, '2020-05-17'),
        horario_fim: faker.date.past(1, '2020-05-17'),
        observacoes: faker.lorem.paragraphs(1),
      },
      {
        id: 11,
        fk_usuario_consumidor: faker.random.number({'min': 1, 'max': 200}),
        fk_usuario_servico_especifico: faker.random.number({'min': 1, 'max': 20}),
        date: faker.date.past(1, '2020-05-17'),
        // fk_usuario_prestador: 127,
        // fk_servico: 25,
        // fk_avaliacao: 25,
        horario_inicio: faker.date.past(1, '2020-05-17'),
        horario_fim: faker.date.past(1, '2020-05-17'),
        observacoes: faker.lorem.paragraphs(1),
      },
      {
        id: 12,
        fk_usuario_consumidor: faker.random.number({'min': 1, 'max': 200}),
        fk_usuario_servico_especifico: faker.random.number({'min': 1, 'max': 20}),
        date: faker.date.past(1, '2020-05-17'),
        // fk_usuario_prestador: 157,
        // fk_servico: 60,
        // fk_avaliacao: 60,
        horario_inicio: faker.date.past(1, '2020-05-17'),
        horario_fim: faker.date.past(1, '2020-05-17'),
        observacoes: faker.lorem.paragraphs(1),
      },
      {
        id: 13,
        fk_usuario_consumidor: faker.random.number({'min': 1, 'max': 200}),
        fk_usuario_servico_especifico: faker.random.number({'min': 1, 'max': 20}),
        date: faker.date.past(1, '2020-05-17'),
        // fk_usuario_prestador: 180,
        // fk_servico: 72,
        // fk_avaliacao: 72,
        horario_inicio: faker.date.past(1, '2020-05-17'),
        horario_fim: faker.date.past(1, '2020-05-17'),
        observacoes: faker.lorem.paragraphs(1),
      },
      {
        id: 14,
        fk_usuario_consumidor: faker.random.number({'min': 1, 'max': 200}),
        fk_usuario_servico_especifico: faker.random.number({'min': 1, 'max': 20}),
        date: faker.date.past(1, '2020-05-17'),
        // fk_usuario_prestador: 42,
        // fk_servico: 48,
        // fk_avaliacao: 48,
        horario_inicio: faker.date.past(1, '2020-05-17'),
        horario_fim: faker.date.past(1, '2020-05-17'),
        observacoes: faker.lorem.paragraphs(1),
      },
      {
        id: 15,
        fk_usuario_consumidor: faker.random.number({'min': 1, 'max': 200}),
        fk_usuario_servico_especifico: faker.random.number({'min': 1, 'max': 20}),
        date: faker.date.past(1, '2020-05-17'),
        // fk_usuario_prestador: 79,
        // fk_servico: 7,
        // fk_avaliacao: 7,
        horario_inicio: faker.date.past(1, '2020-05-17'),
        horario_fim: faker.date.past(1, '2020-05-17'),
        observacoes: faker.lorem.paragraphs(1),
      },
      {
        id: 16,
        fk_usuario_consumidor: faker.random.number({'min': 1, 'max': 200}),
        fk_usuario_servico_especifico: faker.random.number({'min': 1, 'max': 20}),
        date: faker.date.past(1, '2020-05-17'),
        // fk_usuario_prestador: 66,
        // fk_servico: 27,
        // fk_avaliacao: 27,
        horario_inicio: faker.date.past(1, '2020-05-17'),
        horario_fim: faker.date.past(1, '2020-05-17'),
        observacoes: faker.lorem.paragraphs(1),
      },
      {
        id: 17,
        fk_usuario_consumidor: faker.random.number({'min': 1, 'max': 200}),
        fk_usuario_servico_especifico: faker.random.number({'min': 1, 'max': 20}),
        date: faker.date.past(1, '2020-05-17'),
        // fk_usuario_prestador: 126,
        // fk_servico: 28,
        // fk_avaliacao: 28,
        horario_inicio: faker.date.past(1, '2020-05-17'),
        horario_fim: faker.date.past(1, '2020-05-17'),
        observacoes: faker.lorem.paragraphs(1),
      },
      {
        id: 18,
        fk_usuario_consumidor: faker.random.number({'min': 1, 'max': 200}),
        fk_usuario_servico_especifico: faker.random.number({'min': 1, 'max': 20}),
        date: faker.date.past(1, '2020-05-17'),
        // fk_usuario_prestador: 28,
        // fk_servico: 57,
        // fk_avaliacao: 57,
        horario_inicio: faker.date.past(1, '2020-05-17'),
        horario_fim: faker.date.past(1, '2020-05-17'),
        observacoes: faker.lorem.paragraphs(1),
      },
      {
        id: 19,
        fk_usuario_consumidor: faker.random.number({'min': 1, 'max': 200}),
        fk_usuario_servico_especifico: faker.random.number({'min': 1, 'max': 20}),
        date: faker.date.past(1, '2020-05-17'),
        // fk_usuario_prestador: 107,
        // fk_servico: 66,
        // fk_avaliacao: 66,
        horario_inicio: faker.date.past(1, '2020-05-17'),
        horario_fim: faker.date.past(1, '2020-05-17'),
        observacoes: faker.lorem.paragraphs(1),
      },
      {
        id: 20,
        fk_usuario_consumidor: faker.random.number({'min': 1, 'max': 200}),
        fk_usuario_servico_especifico: faker.random.number({'min': 1, 'max': 20}),
        date: faker.date.past(1, '2020-05-17'),
        // fk_usuario_prestador: 138,
        // fk_servico: 71,
        // fk_avaliacao: 71,
        horario_inicio: faker.date.past(1, '2020-05-17'),
        horario_fim: faker.date.past(1, '2020-05-17'),
        observacoes: faker.lorem.paragraphs(1),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('compromisso', null, {});
  }
};
