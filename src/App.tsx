import { ContextProvider } from "./context-data/mainContext"

function App() {

  return (
    <ContextProvider>
      <div>loaded</div>
    </ContextProvider>
  )
}

export default App
