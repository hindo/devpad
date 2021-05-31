import { Column, AddNewItem, CustomDragLayer } from './components'
import { useAppState, ADD_LIST } from './AppStateContext'
import { AppContainer } from './styles'
import { DndProvider } from 'react-dnd'
import { HTML5Backend as Backend } from 'react-dnd-html5-backend'

function App () {
  const { state, dispatch } = useAppState()
  return (
    <DndProvider backend={Backend}>
      <h2>DevPad</h2>
      <AppContainer>
        <CustomDragLayer />
        {state.lists.map((list, i) => (
          <Column key={list.id} id={list.id} title={list.title} index={i} />
        ))}

        <AddNewItem toggleButtonText='+ Add another list' handleOnAdd={text => dispatch({ type: ADD_LIST, payload: text })} />
      </AppContainer>
    </DndProvider>
  )
}

export default App
