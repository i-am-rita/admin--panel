import './App.css'
import MainCont from './Components/MainCont/MainCont';
import Rightbar from './Components/Rightbar/Rightbar';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
        <div className='app-glass'>
        <Sidebar/>
        <MainCont/>
        <Rightbar/>
        </div>
    </div>
    
  );
}

export default App;
