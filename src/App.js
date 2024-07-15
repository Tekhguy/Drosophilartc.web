
import './App.css';
import Top from './components/top';
import Navbar from './components/navbar';
import Carousell from './components/carousell';
import Cardbackground from './components/card';
import andriod from "./components/android-svgrepo-com.svg";



function App() {
  return (
    <div className="App">
      
      <Top />
      <Navbar />
      <Carousell />
      <Cardbackground svg = {andriod} title = "Hands-On Training" description = "At DRTC, we take training to the next
                    <br /> level by ensuring that adequate 
                    <br /> practical sessions are incorporated to
                    <br /> achieve learning with understanding."/>



    </div>
  );
}

export default App;
