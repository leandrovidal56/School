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
    this.belongsTo(models.Test, { foreignKey: 'nota_id', as: 'nota' });
    this.belongsToMany(models.Student, {
      through: 'teachers-students',
      as: 'students',
      foreignKey: 'teacher',
    });
    this.belongsToMany(models.ClassRoom, {
      through: 'class-teachers',
      as: 'class',
      foreignKey: 'teacher',
    });
  }
}

export default Teacher;
