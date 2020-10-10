/* eslint-disable class-methods-use-this */
import Student from '../models/Student';
import Teacher from '../models/Teacher';

class StudentController {
  // eslint-disable-next-line class-methods-use-this
  async store(req, res) {
    const student = await Student.create(req.body);
    return res.json(student);
  }

  async index(req, res) {
    const student = await Student.findAll({
      include: [
        {
          model: Teacher,
          as: 'teachers',
          // through: { attributes: ['student_id', 'teacher_id'] },
          through: { attributes: ['teacher_id'] },
          // through: { attributes: [] },
        },
      ],
    });

    return res.json(student);
  }
}

export default new StudentController();
