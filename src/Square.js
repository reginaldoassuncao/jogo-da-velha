import React from 'react';

const style = {
  width: '100px', // aumentou de 80px para 100px
  height: '100px', // aumentou de 80px para 100px
  margin: '0',
  padding: '0',
  border: '1px solid #999',
  lineHeight: '100px', // aumentou de 80px para 100px
  textAlign: 'center',
  fontSize: '30px',
  fontWeight: 'bold',
  boxSizing: 'border-box'
};



const Square = ({ value, onClick }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export default Square;
