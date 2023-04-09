
import { Outlet } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component.js/Header';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <Header/>
    <Outlet></Outlet>
    </>
  );
}

export default App;
