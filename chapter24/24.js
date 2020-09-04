const textMap = {
    login: ‘로그인‘,
    register: ‘회원가입‘,
  };
  
  
  const AuthForm = ({ type }) => {
    const text = textMap[type];
    return (
      <AuthFormBlock>
        <h3>{text}</h3>
        <form>
          <StyledInput autoComplete=“username“ name=“username“ placeholder=“아이디“ />
          <StyledInput
            autoComplete=“new-password“
            name=“password“
            placeholder=“비밀번호“
            type=“password“
          />
          {type = = = ‘register‘ && (
            <StyledInput
              autoComplete=“new-password“ 
              name=“passwordConfirm“
              placeholder=“비밀번호 확인“
              type=“password“
            />
          )}
          <ButtonWithMarginTop cyan fullWidth style={{ marginTop: ‘1rem‘ }}>
            {text}
          </ButtonWithMarginTop>
        </form>
        <Footer>
          {type = = = ‘login‘ ? (
            <Link to=“/register“>회원가입</Link>
          ) : (
            <Link to=“/login“>로그인</Link>
          )}
        </Footer>
      </AuthFormBlock>
    );
  };
  
  
  
  export default AuthForm;