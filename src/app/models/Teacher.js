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
    // this.belongsToMany(models.Student, {
    Teacher.belongsToMany(models.Student, {
      through: 'teachers-and-students',
      as: 'students',
      foreignKey: 'teacher_id',
    });
  }
  // static associate(models) {
  //   this.belongsToMany(models.student, { foreignKey: 'teacher' });
  // }
}

export default Teacher;
