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

  static associate(models) {
    this.belongsToMany(models.Teacher, {
      through: 'teachers-students',
      as: 'teachers',
      foreignKey: 'student',
    });

    this.belongsToMany(models.Subject, {
      through: 'subjects-students',
      as: 'subjects',
      foreignKey: 'student',
    });
    this.belongsToMany(models.ClassRoom, {
      through: 'class-students',
      as: 'class',
      foreignKey: 'student',
    });
  }
}
export default Student;
