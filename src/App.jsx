import { useState } from 'react'


import './assets/css/style.css'

import TreeModal from './components/TreeModal';
import TreeModal2 from './components/TreeModal2';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <TreeModal2/>
     {/* <TreeModal/> */}

    </>
  )
}

export default App
