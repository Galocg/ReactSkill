const AuthForm = () => {
    return (
      <AuthFormBlock>
        <h3>로그인</h3>
        <form>
          <StyledInput autoComplete="username" name="username" placeholder="아이디" />
          <StyledInput 
            autoComplete="new-password" 
            name="password" 
            placeholder="비밀번호" 
            type="password" 
          />
          <Button cyan fullWidth>
            로그인
          </Button>
        </form>
        <Footer>
          <Link to="/register">회원가입</Link>
        </Footer>
      </AuthFormBlock>
    );
  };