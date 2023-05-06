import Layout from "./Components/Layout";
import Login from "./Components/Login";
import Quiz from "./Components/Pages/Quiz";
import Result from "./Components/Pages/Result";
import SingUp from "./Components/SingUp";
import "./styles/App.css";
import Home from "./Components/Pages/Home";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
function App() {
  return (
    <>
    <Router>
    <Layout>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/singup" element={<SingUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/quiz" element={<Quiz/>} />
        <Route path="/result" element={<Result/>} />
     </Routes>
    </Layout>  
    </Router>
     
    </>
  );
}

export default App;
