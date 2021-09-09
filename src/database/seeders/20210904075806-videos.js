'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert(
    'Videos',
    [
      {
        name: 'Video4',
        description: 'video3 from seeder',
        url: 'www.seeder1.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Video5',
        description: 'video3 from seeder',
        url: 'www.seeder2.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Video6',
        description: 'video3 from seeder',
        url: 'www.seeder3.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {}
  );
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Videos', null, {});
}
