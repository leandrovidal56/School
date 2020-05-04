import Sequelize, { Model } from 'sequelize';

class Teacher extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
    },
    {
      sequelize,
    });

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Student, {
      through: 'teachers-students',
      as: 'students',
      // foreignKey: 'teacher_id',
      foreignKey: 'teacher',
      // foreignKey: 'id',
    });
  }
  // static associate(models) {
  //   this.belongsToMany(models.student, { foreignKey: 'teacher' });
  // }
}

export default Teacher;
