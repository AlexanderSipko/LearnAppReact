import Navbar from '../src/components/Navbar'
import Main from '../src/components/Main'
import Footer from '../src/components/Footer'
import Card from './components/Card';
import './css/App.css';

export default function App() {

  const Star = require('./image/Star 1.png');
  const imagesrc = require('./image/card1.png');
  return (
    <div>
      <Navbar />
      <Main />
      <Card
          img={imagesrc}
          scrol='5.0'
          plus='(6) +'
          contry='USA'
          name='Life Lessons with Katie Zaferes'
          coast='From $136'
          coastType='/ person'
          stars_image={Star}
        />
      <Card
          img={imagesrc}
          scrol='5.0 2'
          plus='(6) + 2'
          contry='USA 2'
          name='Life Lessons with Katie Zaferes 2'
          coast='From $136'
          coastType='/ person 2'
          stars_image={Star}
        />
      <Footer />
    </div>
  );
}

