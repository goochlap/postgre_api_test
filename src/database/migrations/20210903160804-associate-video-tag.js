'use strict';

export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('VideoTags', {
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    VideoId: {
      type: Sequelize.UUID,
      primaryKey: true
    },
    TagId: {
      type: Sequelize.UUID,
      primaryKey: true
    }
  });
}
export function down(queryInterface, Sequelize) {
  return queryInterface.dropTable('VideoTags');
}
