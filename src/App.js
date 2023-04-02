import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className=" w-full !h-full bg-neutral-200">
      <label htmlFor='initialCap'>Initial Capital</label>
       <input type="number" id="initialCap" className='bg-green-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500'></input>
    </div>
  );
}

export default App;
