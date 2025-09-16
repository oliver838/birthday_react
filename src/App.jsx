import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Header } from './components/Header';
import { Counter } from './components/Counter';
import { persons } from './data';
import { Personlist } from './components/Personlist';

function App() {
  const [pers,setPers] = useState(persons)
  return (
    
  <div className='container-fluid'>
    <div className="main">
      <Header/>
      <Counter count={pers.length}/>
      {pers.length!=0 && <Personlist pers={pers} setPers={setPers}/>}
    </div>

  </div>
  )
}

export default App
