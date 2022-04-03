import logo from './logo.svg';
import{Button, Form} from 'react-bootstrap'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import NavigationBar from './components/NavigationBar';
import AddQuote from './pages/AddQuote';
import { Provider } from 'react-redux';
import store from './store';
import AllQuotes from './pages/AllQuotes';
import QuotePage from './pages/QuotePage';

function App() {
  return (
  <Provider store={store}>
    <div>
      <NavigationBar/>
      <Routes>
      <Route path = "/add" element = {<AddQuote/>}>

      </Route>
      <Route exact  path = "/quotes" element = {<AllQuotes/>}>

      </Route>
      <Route exact  path = "/quotes/qute-page/:id" element = {<QuotePage/>}>

      </Route>

      </Routes>
    </div>
    </Provider>
  );
}

export default App;
