import ButtomSubmit from "./components/button/button";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('${background}');
  background-size: cover;
  background-position: initial;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    background-color: lightskyblue;
    background-image: linear-gradient(180deg, skyblue 0%, ghostwhite 40%, lightskyblue 100%);
  }
`

function App() {
  return (
      <AppContainer>
        <UserHeader />
        <TittlePage />
        <LoginForm />
        <ButtomSubmit />
      </AppContainer>
  );
}

export default App;