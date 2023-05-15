import Layout from "./Components/Layout";
import Login from "./Components/Login";
import Quiz from "./Components/Pages/Quiz";
import Result from "./Components/Pages/Result";
import SingUp from "./Components/SingUp";
import PrivateRoute from "./Components/PrivateOutlet";
import "./styles/App.css";
import Home from "./Components/Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {AuthProvider} from "./contexts/AuthContext"
function App() {
  return (
    <>
      <Router>
      <AuthProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/singup" element={<SingUp/>} />
              <Route path="/login" element={<Login/>} />
              {/* <Route path="/quiz" element={<Quiz/>} />
              <Route path="/result" element={<Result/>} /> */}
              <Route path="/" element={<PrivateRoute/>}>
                  <Route path="/quiz" element={<Quiz/>} />
                  <Route path="/result" element={<Result/>} />
              </Route>
            </Routes>
          </Layout>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
