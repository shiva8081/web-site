// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
// import NewsItem from './components/NewsItem';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route>
          <Route exact path="/" element={<News pagesize={5} country="in" category="general" />} />
          <Route exact path="/business" element={<News pagesize={5} country="in" category="business" />} />

          <Route exact path="/health" element={<News pagesize={5} country="in" category="health" />} />

          <Route exact path="/entertainment" element={<News pagesize={5} country="in" category="entertainment" />} />

          <Route exact path="/science" element={<News pagesize={5} country="in" category="science" />} />

          <Route exact path="/technology" element={<News pagesize={5} country="in" category="technology" />} />
          <Route exact path="/sports" element={<News pagesize={5} country="in" category="sports" />} />
          <Route exact path="/general" element={<News pagesize={5} country="in" category="general" />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )

}

export default App;
