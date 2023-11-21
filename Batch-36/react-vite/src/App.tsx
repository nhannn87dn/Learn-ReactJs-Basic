import './App.css';
import ReactHookForm from './components/ReactHookForm';
import ReactHookFormValidation from './components/ReactHookFormValidation';
import SimpleForm from './components/SimpleForm';


function App() {

  
  return (
    <div className='container mx-auto'>
        <SimpleForm />
        <hr />
        <ReactHookForm />
        <hr />
        <h2>ReactHook Form Validation</h2>
        <ReactHookFormValidation />
    </div>
  )
}

export default App
