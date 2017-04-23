const {
  query
} = require('../service/request');

class Api {
  before(req, rsp) {
    const id = req.params.id;
    query(`/stories/before/${id}`).then(rsp.send.bind(rsp)).catch(err => rsp.status(500).send(err));
  }
}

module.exports = new Api();