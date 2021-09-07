import React from 'react';
import './App.css';
import SearchInput from './components/search/search';
import Cart from './components/cart/cart';

function App() {
  return (
    <div>
      {/* <SearchInput value={null} onChange={(e: any) => (e.target.value)} /> */}
      <Cart
        title={`Card Title Large`}
        text={`Some quick example text to build on the card title and make up the bulk of the card's content.`}
        title_font={31}
        text_font={13}
      />
    </div>
  );
}

export default App;
