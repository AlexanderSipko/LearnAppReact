import Navbar from '../src/components/Navbar'
import Main from '../src/components/Main'
import Footer from '../src/components/Footer'
import Card from './components/Card';
import './css/App.css';
import data from './components/data';


import {predict_number, getYourNumber} from './components/function'


export default function App() {



  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            item={item}
        />
      )
  });

  function handlerChang() {
    let text = document.querySelector('#date--1').value
    let state
    let number = getYourNumber(text)
    state = predict_number[number]
    document.querySelector('.predict--text').textContent = state
    document.querySelector('.predict--date').textContent =  `Вы указали дату рождения: ${text}`
    document.querySelector('.predict--number').textContent =  `Ваша цифра: ${number}`
  }

  return (
    <div>
      <Navbar />
      {/* <Main /> */}

          <section className='predict--section'>
            <h1>Предсказание по дате рождения</h1>
            <input id='date--1'></input>
            <button onClick={handlerChang}>Predict</button>
            <p></p>
            <h1 className='predict--date'></h1>
            <p className='predict--number'></p>
            <h2 className='predict--text'> </h2>
          </section>
          {/* <section className='cards-list'>
          {cards}
        </section> */}
      <Footer />
    </div>
  );
}

