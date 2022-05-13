
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
  
    <div className="app" style={{backgroundImage: "url(./backgroundImage.webp" }}>
     <Header />
    </div>
    </BrowserRouter>
  );
}

export default App;
