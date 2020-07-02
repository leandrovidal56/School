/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import Subject from '../models/Subject';
import Test from '../models/Test';

class SubjectController {
  async store(req, res) {
    const {
      class_rooms,
      ...data
    } = req.body;

    const subject = await Subject.create(data);
    subject.setClass(class_rooms);
    return res.json(subject);
  }
}
export default new SubjectController();
