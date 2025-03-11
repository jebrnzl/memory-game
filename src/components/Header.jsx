import { useEffect } from 'react';

const Header = ({ handleNewGame, wins }) => {
  useEffect(() => {
    document.title = `${wins} wins`
  }, [wins]);

  return (
    <header className="header">
      <div className="wins">
      <h4>{wins} wins</h4>

      </div>
      <div className="game-title">
      <h3>Memory Game</h3>

      </div>
      <div className="new-game-btn">
      <button onClick={handleNewGame}>New Game</button>

      </div>
    </header>
  );
};

export default Header;
