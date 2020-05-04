
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('subjects', {
    id: {
      type: Sequelize.INTEGER,
      alloNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('subjects'),
};
