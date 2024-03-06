
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Datetime from './Components/Datetime';
import Sawir from './Images/Sawir.png';
function App() {

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <>
       
      <Home />
      <Header />
      <Datetime/>
      <h1>Happy valentines day😍😊🐁! ei muuta</h1>
      <h1>Current date is {date}</h1>
      <p>This is my fav things</p>
      <ul>
        <li>Cars</li>
        <li>Dog</li>
        <li>Money</li>
      </ul>

      <img src={Sawir} alt="this is car image" /> 
    </>
  );
}

export default App;
