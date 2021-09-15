'use strict';
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('VideoTags', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    videoId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Videos',
        key: 'id'
      }
    },
    tagId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Tags',
        key: 'id'
      }
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('VideoTags');
}
