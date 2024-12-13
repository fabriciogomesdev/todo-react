import { Header } from './components/header';
import './App.css'
import { CreateTask } from './components/NewTask.tsx';
import './global.css'


function App() {
  
  return (
    <div>
    <Header />
    <CreateTask />
    </div>
  )
}

export default App
