const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class workOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  workOrder.init({
    ticket_number: DataTypes.STRING,
    technician_name: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    notification_type: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
  }, {
    sequelize,
    tableName: 'work_orders',
  });
  return workOrder;
};
