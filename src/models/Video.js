'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Tag, {
        through: 'VideoTags',
        foreignKey: 'videoId'
      });
    }
  }
  Video.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      description: DataTypes.STRING,
      url: { type: DataTypes.STRING, allowNull: false }
    },
    {
      sequelize,
      modelName: 'Video'
    }
  );
  return Video;
};
