import Sequelize, { Model } from 'sequelize';

class ClassRoom extends Model {
  static init(sequelize) {
    super.init({
      title: Sequelize.STRING,
    },
    {
      sequelize,
    });
    return this;
  }

  static associete(models) {
    this.belongsToMany(models.Student, {
      through: 'class-students',
      as: 'students',
      foreignKey: 'class',
    });
    this.belongsTo(models.Teacher, {
      through: 'class-teachers',
      as: 'teachers',
      foreignKey: 'class',
    });
    this.belongsTo(models.Subject, {
      through: 'class-subjects',
      as: 'subjects',
      foreignKey: 'class',
    });
  }
}

export default ClassRoom;
