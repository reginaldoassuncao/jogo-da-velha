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
    {squares.map((value, i) => (
      <Square
        key={i}
        value={value}
        onClick={() => onClick(i)}
        highlight={winningLine && winningLine.includes(i)}
      />
    ))}
  </div>
);

export default Board;
