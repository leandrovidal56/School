/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import Subject from '../models/Subject';

class SubjectController {
  async store(req, res) {
    const subject = await Subject.create(req.body);
    return res.json(subject);
  }
}
export default new SubjectController();
