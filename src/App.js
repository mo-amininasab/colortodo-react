import Container from "./components/UI/Container";
import Title from "./components/Title";
import TitleForm from "./components/TitleForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Container>
      <Title />
      <TitleForm />
      <TodoList />
    </Container>
  );
}

export default App;
