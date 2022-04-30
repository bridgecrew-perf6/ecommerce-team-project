import React from 'react';
import { Header } from './components/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Home,
  Adventures,
  Culture,
  BadURL404,
  Login,
  Orders,
  Register,
  SearchResults,
} from './pages/index';

function App() {
  const [cartItems, setCartItems] = React.useState([]);

  return (
    <div>
      <BrowserRouter>
        <Header cartItems={cartItems} setCartItems={setCartItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/adventures"
            element={
              <Adventures cartItems={cartItems} setCartItems={setCartItems} />
            }
          />
          <Route path="/culture" element={<Culture />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/searchresults" element={<SearchResults />} />
          <Route path="*" element={<BadURL404 />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
