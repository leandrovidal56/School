/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
import Teacher from '../models/Teacher';
import Students from '../models/Student';
// import ClassRoom from '../models/ClassRoom';

class TeacherController {
  async store(req, res) {
    const {
      class_rooms,
      clas,
      ...data
    } = req.body;
    const teacher = await Teacher.create(data);
    teacher.setClass(class_rooms);
    return res.json(teacher);
  }

  async index(req, res) {
    const teacher = await Teacher.findAll(
      {
        where: {
          id: (req.body),
        },
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
