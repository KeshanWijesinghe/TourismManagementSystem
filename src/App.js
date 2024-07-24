import Home from './Pages/Home/Home';
import { useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();
  return (
    <div>
    
      <Home />

    </div>
  );
}

export default App;
