import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home"
import Links from "./pages/Links"
import Erro from './pages/Error';

function RoutesApp() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/links' element={<Links />} />
          <Route path='*' element={<Erro />} />
        </Routes>
      </BrowserRouter>
    );
}

export default RoutesApp;