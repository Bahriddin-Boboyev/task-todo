import { Header, Sidebar, Main } from "./components"

const App = () => {
  return (
    <>
      <Header />
      <div className="container content">
        <Sidebar />
        <div className="main-content">
          <Main />
        </div>
      </div>
    </>
  )
}

export default App