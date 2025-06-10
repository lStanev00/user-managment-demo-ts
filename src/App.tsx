import UserList from "./components/UserList"
import { ContextProvider } from "./context-data/mainContext"

function App() {

  return (
    <ContextProvider>
      <UserList />
    </ContextProvider>
  )
}

export default App
