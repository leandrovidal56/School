/* eslint-disable camelcase */
import ClassRoom from '../models/ClassRoom';

class ClassRoomController {
  // eslint-disable-next-line class-methods-use-this
  async store(req, res) {
    const classroom = await ClassRoom.create(req.body);
    return res.json(classroom);
  }
}
export default new ClassRoomController();
