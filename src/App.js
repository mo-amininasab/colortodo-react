import Container from "./components/UI/Container";
import Title from "./components/Title";
import TitleForm from "./components/TitleForm";
import TodoList from "./components/TodoList";
import EditTodoForm from "./components/EditTodoForm";

function App() {
  return (
    <Container>
      <Title />
      <TitleForm />
      <TodoList />
      <EditTodoForm />
    </Container>
  );
}

export default App;
