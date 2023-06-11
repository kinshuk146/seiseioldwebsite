import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GlobalStyle from './GlobalStyles';
import Home from './pages';
import BookDemoPage from './pages/bookdemo';



function App() {
  return (
    <div>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="bookdemo/*" element={<BookDemoPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
