
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('class_subjects', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    class_room_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'class_rooms', key: 'id' },
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

  down: (queryInterface) => queryInterface.dropTable('class-subjects'),
};
