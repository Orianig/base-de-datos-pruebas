'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Singer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Singer.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    age: DataTypes.INTEGER,
    location: DataTypes.STRING,
    single: DataTypes.BOOLEAN,
    style: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Singer',
  });
  return Singer;
};