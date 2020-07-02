import Sequelize, { Model } from 'sequelize';

class Subject extends Model {
  static init(sequelize) {
    super.init({
      title: Sequelize.STRING,
    },
    {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Test, {
      foreignKey: 'id',
    });
    this.belongsToMany(models.Student, {
      through: 'subjects-students',
      as: 'students',
      foreignKey: 'subject',
    });

    this.belongsToMany(models.ClassRoom, {
      through: 'class_subjects',
      as: 'class',
      foreignKey: 'subject',
    });
  }
}

export default Subject;
