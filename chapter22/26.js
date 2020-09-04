require(‘dotenv‘).config();
import Koa from ‘koa‘;
import Router from ‘koa-router‘;
import bodyParser from ‘koa-bodyparser‘;
import mongoose from ‘mongoose‘;


import api from ‘./api‘;
import createFakeData from ‘./createFakeData‘;



// 비구조화 할당을 통해 process.env 내부 값에 대한 레퍼런스 만들기
const { PORT, MONGO_URI } = process.env;



mongoose
.connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => {
    console.log(‘Connected to MongoDB‘);
    createFakeData();
  })
  .catch(e => {
    console.error(e);
  });
(…)