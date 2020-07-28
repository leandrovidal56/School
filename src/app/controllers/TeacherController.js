import Teacher from '../models/Teacher';

class TeacherController {
  // eslint-disable-next-line class-methods-use-this
  async store(req, res) {
    const teacher = await Teacher.create(req.body);
    return res.json(teacher);
  }
}

export default new TeacherController();
