import Sequelize, { Model } from 'sequelize';

class Test extends Model {
  static init(sequelize) {
    super.init(
      {
        nota: Sequelize.DECIMAL,
      },
      {
        sequelize,
      },
    );
    return this;
  }
}

export default Test;
