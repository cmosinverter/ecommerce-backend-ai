import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

export const Item = sequelize.define('Item', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});
