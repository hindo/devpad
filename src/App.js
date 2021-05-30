import { Column, AddNewItem } from './components'
import { useAppState, ADD_LIST } from './AppStateContext'
import { AppContainer } from './styles'

function App () {
  const { state, dispatch } = useAppState()
  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column key={list.id} id={list.id} title={list.title} index={i} />
      ))}

      <AddNewItem toggleButtonText='+ Add another list' handleOnAdd={text => dispatch({ type: ADD_LIST, payload: text })} />
    </AppContainer>
  )
}

export default App
