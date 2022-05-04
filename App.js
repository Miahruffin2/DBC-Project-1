
import './App.css';
import Background from './Components/background';
import Navbar from './Components/header';
import About from './Components/about';
import Footer from './Components/footer'


function App() {
  return (
    <>
    <Navbar />
    <div>
      <Background />
      <About />
      <Footer />
    </div>
    </>
  );
}

export default App;
