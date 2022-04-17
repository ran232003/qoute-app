import logo from './logo.svg';
import{Button, Form} from 'react-bootstrap'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import NavigationBar from './components/NavigationBar';
import AddQuote from './pages/AddQuote';
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import AllQuotes from './pages/AllQuotes';
import QuotePage from './pages/QuotePage';
import { getQuotes } from './api/Api';
import { quoteActions } from './store/QuoteSlice';

function App() {
  const dispatch = useDispatch();
  const fetchQuotes =async ()=>{
   const quotes = await getQuotes();
   dispatch(quoteActions.dbQuotes(quotes))
  } 
  fetchQuotes();
  return (
  
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
  );
}

export default App;
