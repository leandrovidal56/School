import Sequelize from 'sequelize';

import Student from '../app/models/Student';
import Subject from '../app/models/Subject';
import Teacher from '../app/models/Teacher';


import databaseConfig from '../config/database';

const models = [Student, Subject, Teacher];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map((model) => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
