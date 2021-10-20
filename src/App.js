import './App.css';

import Conversor from './components/Conversor';

function App() {
  return (
    <div className="App">
      <div className='linha salmao'>
        <Conversor moedaA="USD" moedaB="BRL"/>
        <Conversor moedaA="BRL" moedaB="USD"/>
      </div>
      <div className='linha green'>
        <Conversor moedaA="CAD" moedaB="BRL"/>
        <Conversor moedaA="BRL" moedaB="CAD"/>
      </div>
      <div className='linha yellow'>
        <Conversor moedaA="USD" moedaB="BRL"/>
        <Conversor moedaA="BRL" moedaB="USD"/>
      </div>
      <div className='linha blue'>
        <Conversor moedaA="EUR" moedaB="BRL"/>
        <Conversor moedaA="BRL" moedaB="EUR"/>
      </div>
      <div className='linha pink'>
        <Conversor moedaA="USD" moedaB="EUR"/>
        <Conversor moedaA="EUR" moedaB="USD"/>
      </div>
      <div className='linha bordo'>
        <Conversor moedaA="USD" moedaB="CAD"/>
        <Conversor moedaA="CAD" moedaB="USD"/>
      </div>
    </div>
  );
}

export default App;
