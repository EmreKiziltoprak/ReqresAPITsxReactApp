import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import {BrowserRouter as Router , Route, Routes} from "react-router-dom";
import About from "./Components/About/About";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import { Provider } from 'react-redux'
import {store} from "./Store/Store";
function App() {
    return (
        <Provider store={store}>

            <Router>
                <Header/>
                <Routes>
                <Route path="/" element={<About/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                    </Routes>
            </Router>
        </Provider>
    );

}

export default App;
