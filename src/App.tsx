import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { ProductList } from './pages/product-list';
import { AboutPage } from './pages/about-page';
import { Navigation } from './components/Navigation';


function App() {
return(
  <>
  <Navigation/>
  <Routes>
    <Route path='/' element={<ProductList/>}></Route>
    <Route path='about' element={<AboutPage/>}></Route>
  </Routes>
  </>

)

}

export default App;
