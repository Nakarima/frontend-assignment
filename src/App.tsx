import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './views/home';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
