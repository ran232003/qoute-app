import logo from './logo.svg';
import{Button, Form} from 'react-bootstrap'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import NavigationBar from './components/NavigationBar';
import AddQuote from './pages/AddQuote';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
  <Provider store={store}>
    <div>
      <NavigationBar/>
      <Routes>
      <Route path = "/add" element = {<AddQuote/>}>

      </Route>

      </Routes>
    </div>
    </Provider>
  );
}

export default App;
