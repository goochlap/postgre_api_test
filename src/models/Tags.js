'use strict';

import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Video, {
        through: 'VideoTags',
        foreignKey: 'tagId'
      });
    }
  }
  Tags.init(
    {
      value: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Tag'
    }
  );
  return Tags;
};
