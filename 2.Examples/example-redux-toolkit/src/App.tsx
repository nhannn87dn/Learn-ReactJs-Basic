
import './App.css'
import { Bank } from './redux/features/bank/Bank'
import { Counter } from './redux/features/counter/Counter'

function App() {

  return (
    <>
      <Counter />
      <hr />
      <Bank />
    </>
  )
}

export default App
