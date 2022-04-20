import './App.css'
import MainCont from './Components/MainCont/MainCont';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
        <div className='app-glass'>
        <Sidebar/>
        <MainCont/>
        </div>
    </div>
    
  );
}

export default App;
