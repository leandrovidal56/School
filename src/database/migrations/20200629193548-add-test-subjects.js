
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('subjects', 'test',
    {
      type: Sequelize.INTEGER,
      references: { model: 'tests', key: 'id' },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    }),

  down: (queryInterface) => queryInterface.dropColumn('subjects', 'test'),
};
