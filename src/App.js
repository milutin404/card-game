import './App.css';
import Card from './components/Card'
import MainCard from './components/MainCard';
import Deck from './components/Deck';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import allReducers from './reducers';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App() {

  const renderCards = () => {
    return [...Array(5)].map(() => {
      const id = Date.now() + Math.random() * 100;
      return <Card key={'Card-' + id} cardId={id} cardNumber={Math.floor(Math.random() * 15)} />
    });
  }

  const gameOver = (value) => {
    if (!value) {
      alert('GAME OVER!!!');
    }
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
          <Deck gameOver={gameOver} />
          <MainCard />
        </div>
      </div>
    </Provider>
  );
}

export default App;
