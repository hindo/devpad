import { AppConfigProvider } from './contexts/AppConfigContext'
import { AppContainer, ColumnContainer, ColumnsContainer } from './styles'
import { Column, AddNewItem, CustomDragLayer, Toolbar } from './components'
import { DndProvider } from 'react-dnd'
import { HTML5Backend as Backend } from 'react-dnd-html5-backend'
import { useAppState, ADD_LIST } from './AppStateContext'

function App() {
  const { state, dispatch } = useAppState()
  return (
    <AppConfigProvider>
      <DndProvider backend={Backend}>
        <AppContainer>
          <CustomDragLayer />
          <Toolbar />
          <ColumnsContainer>
            {state.lists.map((list, i) => (
              <Column key={list.id} id={list.id} title={list.title} index={i} />
            ))}
            <ColumnContainer dummy>
              <AddNewItem
                toggleButtonText="+ Add another list"
                handleOnAdd={text =>
                  dispatch({ type: ADD_LIST, payload: text })
                }
                accentColors={false}
              />
            </ColumnContainer>
          </ColumnsContainer>
        </AppContainer>
      </DndProvider>
    </AppConfigProvider>
  )
}

export default App
