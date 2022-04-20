import './App.css';
import Card from './components/Card'
import MainCard from './components/MainCard';
import Deck from './components/Deck';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import allReducers from './reducers';
import { useState } from 'react';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App() {

  let [cards, setCards] = useState([{
    value: 5,
    id: 1
  }, {
    value: 6,
    id: 2
  }, {
    value: 4,
    id: 3
  }, {
    value: 7,
    id: 4
  }, {
    value: 3,
    id: 5
  }]);

  /**
   * Create Card components from cards (state).
   * 
   * @returns <Card />
   */
  const renderCards = () => {
    return cards.map((card) => {
      return <Card
        key={'Card-' + card.id}
        cardId={card.id}
        cardNumber={card.value}
        removeCard={removeCard}
      />
    });
  }

  /**
   * Checks is selected Card and MainCard have same value,
   * Removes that card from array and sets new state,
   * If there is no cards, calls endGame with 'YOU WON !!!' message.
   * 
   * @param {*} cardData 
   */
  const removeCard = (cardData) => {
    const mainCardValue = store.getState()['mainCardValue']
    if (cardData.cardNumber === mainCardValue) {
      setCards(cards.filter(card => card.id !== cardData.cardId));

      // Display win msg
      if (cards.length === 1) {
        gameEnd('YOU WON !!!');
      };
    }
  }

  /**
   * Opens Alert with message.
   * msg = 'YOU WON !!!' || 'GAME OVER !!!'
   *
   * @param {String} msg 
   */
  const gameEnd = (msg) => {
    alert(msg);
  }

  return (
    <Provider store={store}>
      <div className="App">
        {/* Top view */}
        <div className="Top">
          {renderCards()}
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
