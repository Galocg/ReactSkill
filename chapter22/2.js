require(‘dotenv‘).config();
const Koa = require(‘koa‘);
const Router = require(‘koa-router‘);
const bodyParser = require(‘koa-bodyparser‘);
const mongoose = require(‘mongoose‘);


const api = require(‘./api‘);



// 비구조화 할당을 통해 process.env 내부 값에 대한 레퍼런스 만들기
const { PORT, MONGO_URI } = process.env;



mongoose
.connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => {
    console.log(‘Connected to MongoDB‘);
  })
  .catch(e => {
    console.error(e);
});



(…)