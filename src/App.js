import Navbar from '../src/components/Navbar'
import Main from '../src/components/Main'
import Footer from '../src/components/Footer'
import Card from './components/Card';
import './css/App.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Card />
      <Footer />
    </div>
  );
}

