import React from 'react';
import Square from './Square';

const style = {
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
  gap: '0',
  maxWidth: '300px', 
  margin: '20px auto'
};


const Board = ({ squares, onClick, winningLine }) => (
  <div style={style}>
    {squares.map((value, i) => {
      const row = Math.floor(i / 3) + 1;
      const col = (i % 3) + 1;
      return (
        <Square
          key={i}
          value={value}
          onClick={() => onClick(i)}
          highlight={winningLine && winningLine.includes(i)}
          row={row}
          col={col}
        />
      );
    })}
  </div>
);


export default Board;
