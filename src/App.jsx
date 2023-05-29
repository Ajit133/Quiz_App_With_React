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
import PublicRoute from "./Components/PublicRoute";
function App() {
  return (
    <>
      <Router>
      <AuthProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/" element={<PublicRoute/>}>
                  <Route path="/singup" element={<SingUp/>} />
                  <Route path="/login" element={<Login/>} />
              </Route>
              <Route path="/" element={<PrivateRoute/>}>
                  <Route path="/quiz/:id" element={<Quiz/>} />
                  <Route path="/result/:id" element={<Result/>} />
              </Route>
            </Routes>
          </Layout>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
