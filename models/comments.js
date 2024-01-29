const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init(
    {
      comment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'user_id',
        },
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    /*  comment_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: get.DATE(),
      }, */
      game_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'games',
          key: 'game_id',
        },
      }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comments',
      }
);

module.exports = Comments