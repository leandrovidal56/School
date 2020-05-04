/* eslint-disable no-shadow */
/* eslint-disable class-methods-use-this */
import Student from '../models/Student';
import teachers from '../models/Teacher';

class StudentController {
  // eslint-disable-next-line class-methods-use-this
  // async store(req, res) {
  //   const student = await Student.create(req.body);
  //   return res.json(student);
  // }
  async store(req, res) {
    const { teachers, ...data } = req.body;
    const student = await Student.create(data);
    student.setTeachers(teachers);
    return res.json(student);
  }

  async index(req, res) {
    const student = await Student.findAll({
      include: [
        {
          model: teachers,
          // Model: Teacher,
          as: 'teachers',
          through: { attributes: ['student', 'teacher'] },
          // through: { attributes: ['teacher_id'] },
          // through: { attributes: ['name'] },
          // through: { },

        },
      ],
    });

    return res.json(student);
  }
}

export default new StudentController();
