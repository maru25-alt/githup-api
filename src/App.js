import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Card from './Card';

function App() {
  const [data, setdata] = useState({})
  const [showCard, setshowCard] = useState(true)
  const [loading, setloading] = useState(false)

  useEffect(() => {
    setloading(true)
     axios.get('https://api.github.com/users/whiteSnow0213').then(res => {
       console.log(res.data)
       setdata(res.data)
       setloading(false)
     })
  }, [])
 
  const toggleUser = () => {
    setshowCard(!showCard)
  }
  return (
    <div className="App">
        <button className="button" onClick={toggleUser}>Toggle User</button>
        {showCard && <Card loading={loading}  data={data}/>}
       
    </div>
  );
}

export default App;
