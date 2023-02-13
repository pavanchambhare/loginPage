import './index.css';
import './Login.css';
import {Route, Routes } from "react-router-dom";
import LoginForm from './LoginForm';
import SignUp from './SignUp';


function App() {
  return (
    
    <Routes>
     <Route  path='/' element={<LoginForm />}></Route>
     <Route  path='/' element={<SignUp />}></Route>

    </Routes>
   
    
  );
}

export default App;
