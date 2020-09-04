import React, { useEffect, useState } from ‘react‘;
import { useSelector, useDispatch } from ‘react-redux‘;
import { withRouter } from ‘react-router-dom‘;
import { changeField, initializeForm, login } from ‘../../modules/auth‘;
import AuthForm from ‘../../components/auth/AuthForm‘;
import { check } from ‘../../modules/user‘;


const LoginForm = ({ history }) => {
  const [error, setError] = useState(null);
  (…)



useEffect(() => {
    if (authError) {
      console.log(‘오류 발생‘);
      console.log(authError);
      setError(‘로그인 실패‘);
      return;
    }
    if (auth) {
      console.log(‘로그인 성공‘);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);



(…)



return (
    <AuthForm
      type=“login“
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};



export default withRouter(LoginForm);