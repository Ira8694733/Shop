import React from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
// import Loadable from 'react-loadable';
// import {Suspense} from 'react';
import Home from "./screens/Home"
import Product from "./screens/Product";
import Laptops from "./screens/Laptops";
import Smartphones from "./screens/Smartphones";
import Cart from "./screens/Cart";
import NotFound from "./screens/NotFound";


function App() {
    let navigate = useNavigate()
  return (
      <>
          <Routes>
             <Route path="/">
                  <Route index element={
                      <Home/>
                  } />
                  <Route path=":id" element={<Product/>} />
              </Route>
              <Route path='/smartphones/'>
                  <Route index element={<Smartphones/>} />
                  <Route path=":id" element={<Product/>} />
              </Route>
              <Route path='/laptops/'>
                  <Route index element={<Laptops/>} />
                  <Route path=":id" element={<Product/>} />
              </Route>
              <Route path='/cart/'>
                  <Route index element={<Cart/>} />
              </Route>
              <Route path="*" element={<NotFound/>} />
          </Routes>
     </>
  );
}

export default App;
