import { Router } from 'express';
// import Student from './app/models/Student';
import StudentController from './app/controllers/StudentController';
import TeacherController from './app/controllers/TeacherController';
import SubjectController from './app/controllers/SubjectController';

// import Subject from './app/models/Subject';
// import Teacher from './app/models/Teacher';

const routes = new Router();

// routes.get('/', async (req, res) => {
//   const student = await Student.create({
//     name: 'leandro vidal',
//   });
//   return res.json(student);
// });

// routes.get('/', (req, res) => res.json({ message: 'teste' }));

routes.post('/student', StudentController.store);
routes.get('/student', StudentController.index);
routes.post('/teacher', TeacherController.store);
routes.post('/subject', SubjectController.store);

export default routes;
