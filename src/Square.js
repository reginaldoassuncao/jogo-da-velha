import React from 'react';

const style = {
  width: '60px',
  height: '60px',
  margin: '0',
  padding: '0',
  border: '1px solid #999',
  lineHeight: '60px',
  textAlign: 'center',
  fontSize: '20px',
  fontWeight: 'bold',
  boxSizing: 'border-box'
};

const Square = ({ value, onClick }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export default Square;
