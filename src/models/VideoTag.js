'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class VideoTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Video, { foreignKey: 'videoId' });
      this.belongsTo(models.Tag, { foreignKey: 'tagId' });
    }
  }
  VideoTag.init(
    {
      videoId: DataTypes.INTEGER,
      tagId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'VideoTag'
    }
  );
  return VideoTag;
};
