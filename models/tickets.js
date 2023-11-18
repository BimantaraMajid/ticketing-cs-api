const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class tickets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  tickets.init({
    ticket_number: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    operator: DataTypes.STRING,
    customer: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'tickets',
  });
  return tickets;
};
