
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('teachers', 'nota',
    {
      type: Sequelize.INTEGER,
      references: { model: 'tests', key: 'id' },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    }),

  down: (queryInterface) => queryInterface.dropColumn('teachers', 'nota'),
};
