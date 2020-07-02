
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('students', 'test',
    {
      type: Sequelize.INTEGER,
      references: { model: 'tests', key: 'id' },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    }),

  down: (queryInterface) => queryInterface.dropColumn('students', 'test'),
};
