import React from 'react';

const style = {
  width: '80px', // was 60px
  height: '80px', // was 60px
  margin: '0',
  padding: '0',
  border: '1px solid #999',
  lineHeight: '80px', // was 60px
  textAlign: 'center',
  fontSize: '30px', // was 20px
  fontWeight: 'bold',
  boxSizing: 'border-box'
};


const Square = ({ value, onClick }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export default Square;
