import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import MatchDetails from './pages/MatchDetails';
import env from "react-dotenv";



function App() {
  const [data, setData] = useState('')
  const [liveData, setLiveData] = useState('')

  useEffect(() => {
    const getData = async () => {
      const dataFromserver = await fetchUpcomingMatches();
      setData(dataFromserver)
      const liveData = await fetchLiveMatches();
      setLiveData(liveData)
    }
    getData()
  }, [])

  const fetchUpcomingMatches = async () => {
    const res = await fetch(`https://api.pandascore.co/dota2/matches/upcoming?sort=&page=1&per_page=50&token=${env.PANDASCORE_API_KEY}`)
    const json = await res.json();
    return json

  }

  const fetchLiveMatches = async () => {
    const res = await fetch(`https://api.pandascore.co/dota2/matches/running?token=${env.PANDASCORE_API_KEY}`)
    const json = await res.json();
    return json

  }
  
  return (
    <div className="App container mx-auto">
      <Router>
        <Routes>
          <Route path="/" element={<Home data={data} liveData={liveData}/>} />
          <Route path="/:id" element={<MatchDetails/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
