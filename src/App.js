import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CharacterSquare from './CharacterSquare';
import ChatPage from './ChatPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/square" />} />
        <Route path="/square" element={<CharacterSquare />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;