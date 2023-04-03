import AnimatedBG from './components/Utility/AnimatedBG';
import './App.scss';

function App() {
  return (
    <>
    <div className="bg"><AnimatedBG/></div>
    <div className="__container ">
      <div className="content"><label htmlFor='initialCap'>Initial Capital</label>
       <input type="number" id="initialCap" className='' step="none"></input></div>
      
    </div></>
  );
}

export default App;
