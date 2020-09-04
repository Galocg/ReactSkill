(…)
const ButtonWithMarginTop = styled(Button)</span>
  <span class="cd2 co33">margin-top</span><span class="cd2 co34">:</span> <span class="cd2 co32">1rem</span><span class="cd2 co33">;</span>
<span class="cd2 co31">;


const AuthForm = () => {
  return (
    <AuthFormBlock>
      <h3>로그인</h3>
      <form>
        <StyledInput autoComplete=“username“ name=“username“ placeholder=“아이디“ />
        <StyledInput
          autoComplete=“new-password“
          name=“password“
          placeholder=“비밀번호“
          type=“password“
        />
        <ButtonWithMarginTop cyan fullWidth>
          로그인
        </ButtonWithMarginTop>
      </form>
      <Footer>
        <Link to=“/register“>회원가입</Link>
      </Footer>
    </AuthFormBlock>
  );
};



export default AuthForm;