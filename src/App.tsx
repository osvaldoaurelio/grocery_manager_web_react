import React, { useEffect, useState } from 'react';

import { ISupermarket } from './@types'

import api from './services/api';
import Supermarket from './components/Supermarket';

function App() {
  const [supermarkets, setSupermarkets] = useState<ISupermarket[]>([]);

  useEffect(() => {
    api.get<{data: ISupermarket[]}>('/supermarkets')
      .then(({ data: { data } })=>  setSupermarkets(data))
  }, []);

  return (
    <div className="App">
      {supermarkets?.map(supermarket => (
        <Supermarket 
          key={supermarket._id.$oid}
          supermarket={supermarket}
        />
      ))}
    </div>
  );
}

export default App;
