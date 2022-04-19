import './App.css';
import Card from './components/Card'
import MainCard from './components/MainCard';
import Deck from './components/Deck';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import allReducers from './reducers';
import { useEffect, useState } from 'react';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App() {

  let [cards, setCards] = useState([]);


  useEffect(() => {
    cards = renderCards();
    setCards(cards);
  }, []);


  const renderCards = () => {
    return [...Array(5)].map(() => {
      const id = Date.now() + Math.random() * 100;
      return <Card
        key={'Card-' + id}
        cardId={id}
        cardNumber={Math.floor(Math.random() * 15)}
        removeCard={removeCard}
      />
    });
  }

  const removeCard = (cardData) => {
    let mainCardValue = store.getState()['mainCardValue']
    if (cardData.cardNumber === mainCardValue) {
      cards = removeClickedCard(cardData);
      setCards(cards);

      if (!checkIfNoCardsLeft()) {
        gameEnd('YOU WON!!!');
      };
    }
  }

  const checkIfNoCardsLeft = () => {
    let howManyLeft = cards.filter(card => card !== null);
    return howManyLeft.length;
  }

  const removeClickedCard = (cardData) => {
    return cards.map((card) => {
      if (card !== null) {
        return card.props.cardId !== cardData.cardId ? card : null;
      } else {
        return null;
      }
    });
  }

  const gameEnd = (msg) => {
    alert(msg);
  }

  return (
    <Provider store={store}>
      <div className="App">
        {/* Top view */}
        <div className="Top">
          {cards}
        </div>
        {/* Bottom view */}
        <div className="Bottom">
          <Deck gameOver={gameEnd} />
          <MainCard />
        </div>
      </div>
    </Provider>
  );
}

export default App;
