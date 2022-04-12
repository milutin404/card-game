import './App.css';
import Card from './components/Card'
import MainCard from './components/MainCard';
import Deck from './components/Deck';

function App() {

  const renderCards = () => {
    return [...Array(5)].map(() => <Card cardNumber={Math.floor(Math.random() * 15)} />);
  }

  const gameOver = (value) => {
    if (!value) {
      alert('GAME OVER!!!');
    }
  }

  return (
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
  );
}

export default App;
