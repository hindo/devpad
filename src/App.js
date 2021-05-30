import { Column, Card, AddNewItem } from './components'
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
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
}

export default App;
