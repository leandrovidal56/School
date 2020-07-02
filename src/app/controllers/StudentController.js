/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable class-methods-use-this */
import Student from '../models/Student';
import teachers from '../models/Teacher';
import Subject from '../models/Subject';
import ClassRoom from '../models/ClassRoom';

class StudentController {
  async store(req, res) {
    const {
      teachers,
      subjects,
      class_rooms,
      ...data
    } = req.body;

    const student = await Student.create(data);
    student.setTeachers(teachers);
    student.setSubjects(subjects);
    student.setClass(class_rooms);
    return res.json(student);
  }

  async index(req, res) {
    const student = await Student.findAll({
      include: [
        {
          model: teachers,
          as: 'teachers',
          through: { attributes: ['student', 'teacher'] },
        },
        {
          model: Subject,
          as: 'subjects',
          through: { attributes: ['subject'] },
        },
        {
          model: ClassRoom,
          as: 'class',
          through: {},
        },
      ],
    });
    return res.json(student);
  }
}

export default new StudentController();
