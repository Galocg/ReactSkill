import React, { useEffect, useState } from ‘react‘;
import { useDispatch, useSelector } from ‘react-redux‘;
import { changeField, initializeForm, register } from ‘../../modules/auth‘;
import AuthForm from ‘../../components/auth/AuthForm‘;
import { check } from ‘../../modules/user‘;
import { withRouter } from ‘react-router-dom‘;


const RegisterForm = ({ history }) => {
  (…)



// 회원가입 성공/실패 처리



// user 값이 잘 설정되었는지 확인
  useEffect(() => {
    if (user) {
      history.push(‘/‘); // 홈 화면으로 이동
      try {
        localStorage.setItem(‘user‘, JSON.stringify(user));
      } catch (e) {
        console.log(‘localStorage is not working‘);
      }
    }
  }, [history, user]);



return (…);
};



export default withRouter(RegisterForm);