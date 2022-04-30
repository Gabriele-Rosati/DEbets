import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import env from 'react-dotenv';


function MatchDetails(props) {
    const { id } = useParams()
    const [data, setData] = useState('')

    useEffect(() => {
      const getData = async () => {
        const dataFromserver = await fetchMatch();
        setData(dataFromserver)
      }
      getData()
    }, [])
  
    const fetchMatch = async () => {
      const res = await fetch(`https://api.pandascore.co/matches/${id}?token=${env.PANDASCORE_API_KEY}`)
      const json = await res.json();
      return json
  
    }

  return (
    <div>MatchDetails</div>
  )
}

export default MatchDetails