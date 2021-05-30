import { Column, Card } from './components'
import { AppContainer } from './styles'

function App() {
  return (
    <AppContainer>
      <Column title="To Do">
        <Card>Generate app scaffold</Card>
      </Column>
      <Column title="In Progress">
        <Card>Learn Typescript</Card>
      </Column>
      <Column title="Done">
        <Card>Begin to use static typing</Card>
      </Column>
    </AppContainer>
  );
}

export default App;
