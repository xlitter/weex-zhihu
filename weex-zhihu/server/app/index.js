const express = require('express');
const app = express();
const request = require('request-promise-native');
const router = require('./router/router');

const port = 51880;


app.use('/', router);
// app.get('/', (req, rsp) => {
//   request('http://news-at.zhihu.com/api/4/stories/before/20170421').then((data) => {
//     rsp.send(data);
//   }).catch((err) => {
//     rsp.status(500).send(err);
//   });

// });

app.listen(port, () => {
  console.log(`server start ${port}`);
});