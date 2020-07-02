import { Router } from 'express';
import StudentController from './app/controllers/StudentController';
import TeacherController from './app/controllers/TeacherController';
import SubjectController from './app/controllers/SubjectController';
import ClassRoomController from './app/controllers/ClassRoomController';
import TestController from './app/controllers/TestController';

const routes = new Router();

routes.post('/student', StudentController.store);
routes.get('/student', StudentController.index);
routes.post('/teacher', TeacherController.store);
routes.get('/teacher', TeacherController.index);
routes.post('/subject', SubjectController.store);
routes.post('/classroom', ClassRoomController.store);
routes.post('/test', TestController.store);


export default routes;
