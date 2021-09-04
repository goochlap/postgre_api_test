'use strict';

export async function up(queryInterface, Sequelize) {
  /**
   * Add seed commands here.
   *
   * Example:
   * await queryInterface.bulkInsert('People', [{
   *   name: 'John Doe',
   *   isBetaMember: false
   * }], {});
   */
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('VideoTags', null, {});
}
