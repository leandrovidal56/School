import Sequelize, { Model } from 'sequelize';


class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );

    return this;
  }

  // static associate(models) {
  //   this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  //   this.belongsTo(models.User, { foreignKey: 'provider_id', as: 'provider' });
  // }

  static associate(models) {
    // this.belongsTo(models.Teacher, { as: 'teste', foreignKey: 'teacher_id' });
    this.belongsToMany(models.Teacher, {
    // Student.belongsToMany(models.Teacher, {
      through: 'teachers-students',
      as: 'teachers',
      // foreignKey: 'student_id',
      foreignKey: 'student',
      // foreignKey: 'id',
    });
  }
}

export default Student;
