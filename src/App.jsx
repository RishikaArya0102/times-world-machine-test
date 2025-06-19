import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import LoginForm from './components/LoginForm';
import { store } from "./redux/store";
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Provider store={store}>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        {/* Add more routes below as needed */}
      </Routes>
      </Provider>
    </Router>
  );
}

export default App;
