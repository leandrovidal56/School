
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('teachers-students', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNUll: false,
    },
    // teacher_id: {
    teacher: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'teachers', key: 'id' },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    // student_id: {
    student: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'students', key: 'id' },
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

  down: (queryInterface) => queryInterface.dropTable('teachers-students'),
};
