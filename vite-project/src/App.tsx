import Navbar from './components/navbar';
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';



function App() {
  return (
    <>
      <Toaster position="bottom-right" />
      <Navbar />
      <Home />
    </>
  );
}

export default App;
