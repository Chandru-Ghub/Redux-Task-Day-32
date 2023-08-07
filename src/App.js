import { Provider } from 'react-redux';
import './App.css';
import store from './Redux/store'
import Header from './Components/Pages/Header';
import {Routes, Route} from 'react-router-dom'
import Cart from './Components/Pages/Cart';
import Page from './Components/Pages/Page';
import Footer from './Components/Pages/Footer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
    <Routes>
      <Route path="/" Component={Page} />
      <Route path="/cart" Component={Cart} />
    </Routes>
    
    </div>
    </Provider>
  );
}

export default App;
