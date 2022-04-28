import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import env from "react-dotenv";



function App() {
  const [data, setData] = useState('')

  useEffect(() => {
    const getData = async () => {
      const dataFromserver = await fetchMatchups();
      setData(dataFromserver)
    }
    getData()
  }, [])

  const fetchMatchups = async () => {
    const res = await fetch(`https://api.pandascore.co/dota2/matches/upcoming?sort=&page=1&per_page=50&token=${env.PANDASCORE_API_KEY}`)
    const json = await res.json();
    return json

  }
  if(data !== '')
  console.log(data[0].games)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home data={data}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
