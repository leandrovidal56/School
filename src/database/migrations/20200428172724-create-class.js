
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('class', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    teacher: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'teachers', key: 'id' },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    student: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'students', key: 'id' },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    subject: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'subjects', key: 'id' },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
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

  down: (queryInterface) => queryInterface.dropTable('class'),
};
