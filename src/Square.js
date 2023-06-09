import React from 'react';

const style = {
  width: '100px',
  height: '100px',
  margin: '0',
  padding: '0',
  border: '1px solid #999',
  lineHeight: '100px',
  textAlign: 'center',
  fontSize: '30px',
  fontWeight: 'bold',
  boxSizing: 'border-box',
  background: 'white'
};

const Square = ({ value, onClick, highlight, row, col }) => (
  <button
    style={{...style, background: highlight ? 'lightgreen' : 'white'}}
    onClick={onClick}
    aria-label={`Square at row ${row}, column ${col}`}
  >
    {value}
  </button>
);


export default Square;
