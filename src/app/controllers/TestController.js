/* eslint-disable class-methods-use-this */
import Test from '../models/Test';

class TestController {
  async store(req, res) {
    const tests = await Test.create(req.body);
    return res.json(tests);
  }
}
export default new TestController();
