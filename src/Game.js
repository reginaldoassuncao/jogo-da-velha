import React, { useState, useEffect } from 'react';
import Board from './Board';

const style = {
  marginTop: '20px',
  fontSize: '20px',
  fontWeight: 'bold',
  textAlign: 'center'
};

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = null;

    if (calculateWinner(history[stepNumber]) || isBoardFull(history[stepNumber])) {
      clearInterval(interval);
    } else {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [history, stepNumber]);

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];

    if (calculateWinner(squares) || squares[i]) return;

    squares[i] = xIsNext ? 'X' : 'O';
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXIsNext(!xIsNext);
  };

  const restartGame = () => {
    setHistory([Array(9).fill(null)]);
    setStepNumber(0);
    setXIsNext(true);
    setSeconds(0); // Reset the timer
  };

  const isBoardFull = (squares) => {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] == null) {
        return false;
      }
    }
    return true;
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Board squares={current} onClick={handleClick} />
      <div style={style}>
        {winner ? `Vencedor: ${winner}` : isBoardFull(current) ? 'Empate' : `Próximo Jogador: ${xIsNext ? 'X' : 'O'}`}
      </div>
      <div style={style}>
        {`Tempo de jogo: ${Math.floor(seconds / 60)}:${seconds % 60 < 10 ? '0' + (seconds % 60) : seconds % 60}`}
      </div>
      <button onClick={restartGame} className={`restart-button ${winner || isBoardFull(current) ? 'visible' : ''}`}>Reiniciar Jogo</button>
    </div>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
