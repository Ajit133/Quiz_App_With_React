import Layout from './Components/Layout'
import Login from './Components/Login'
import Quiz from './Components/Pages/Quiz'
// import SingUp from './Components/SingUp'
import './styles/App.css'
// import Home from './Components/Pages/Home'
function App() {

  return (
    <>
      <Layout >
        {/* <Home /> */}
        {/* <SingUp /> */}
        {/* <Login /> */}
        <Quiz />
      </Layout>
    </>
  )
}

export default App
