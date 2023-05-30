import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import EmpleadoList from './components/EmpleadoList';

function App() {

  return (
    <section className='section-lista-empleados border m-4'>
      <h1 className='text-center'>Lista de empleados</h1>
      <EmpleadoList></EmpleadoList>
    </section>
  )
}

export default App
