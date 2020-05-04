import Teacher from '../models/Teacher';
import Students from '../models/Student';

class TeacherController {
  // eslint-disable-next-line class-methods-use-this
  async store(req, res) {
    const teacher = await Teacher.create(req.body);
    return res.json(teacher);
  }

  // eslint-disable-next-line class-methods-use-this
  async index(req, res) {
    // eslint-disable-next-line no-unused-vars
    const teacher = await Teacher.findAll(
      {
        where: {
          // id: 2,
          id: (req.body),
        },
        // const teacher = await Teacher.findById(id)({

        include: [
          {
            model: Students,
            as: 'students',
            through: { attributes: [] },
          },
        ],
      },
    );

    return res.json(teacher);
  }
}

export default new TeacherController();
