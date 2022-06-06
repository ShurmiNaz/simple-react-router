
import './App.css';
import Header from './components/Header/Header';
import Friends from './components/Friends/Friends';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import FriendDetail from './components/FriendDetail/FriendDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/friends" element={<Friends />} />
          <Route path="/friend/:userId" element={<FriendDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
