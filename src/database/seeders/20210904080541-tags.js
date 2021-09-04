'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert(
    'Tags',
    [
      {
        value: 'Tags1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 'Tags2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        value: 'Tags3',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {}
  );
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Tags', null, {});
}
