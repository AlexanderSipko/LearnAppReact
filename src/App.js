import Navbar from '../src/components/Navbar'
import Main from '../src/components/Main'
import Footer from '../src/components/Footer'
import Card from './components/Card';
import './css/App.css';
import data from './components/data';

export default function App() {

  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            item={item}
            title={item.title}
            description={item.description}
        />
      )
  });

  return (
    <div>
      <Navbar />
      <Main />
        <section className='cards-list'>
          {cards}
        </section>
      <Footer />
    </div>
  );
}

